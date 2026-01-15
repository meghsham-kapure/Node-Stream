import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export default async function connectMongoDB() {
    let dbConnection;

    try {
        console.log("Connecting to DB...");
        dbConnection = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`);
        console.log("Mongo DB Atlas Connected !");
    } catch (err) {
        console.error(`\n\nError in DB Connection : ${err}\n\n`);
        throw err;
    } finally {
    }

    return dbConnection;
}
