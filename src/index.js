import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectMongoDB from "./db/connect-mongo.js";
import app from "./app.js";

console.log(`Node-Stream started at ${new Date().toLocaleString()}`);

const _PORT = process.env.APP_PORT || "5050";
const _NAME = process.env.APP__NAME || "NODE-STREAM";
const _URL = process.env.APP__URL || "http://localhost";

connectMongoDB()
    .then(() => {
        app.on("error", (err) => console.err(`Express Server Failed with Error ${err}`));

        app.listen(_PORT, () => console.log(`${_NAME} started running on ${_URL}:${_PORT}`));
    })
    .catch((err) => console.error(`DB Connection Failed with Error ${err}`));
