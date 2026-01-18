import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectMongoDB from "./db/connect-mongo.js";
import app from "./app.js";

console.log(`Node-Stream started at ${new Date().toLocaleString()}`);

const PORT = process.env.APP_PORT || "5050";
const NAME = process.env.APP_NAME || "NODE-STREAM";
const URL = process.env.APP_URL || "http://localhost";

connectMongoDB()
    .then(() => {
        app.on("error", (err) => console.err(`Express Server Failed with Error ${err}`));

        app.listen(PORT, () => console.log(`${NAME} started running on ${URL}:${PORT}`));
    })
    .catch((err) => console.error(`DB Connection Failed with Error ${err}`));
