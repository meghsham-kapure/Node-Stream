import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export async function connectMongoDB() {
    let dbConnection;

    try {
        console.log("Connecting to DB...");
        dbConnection = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`);

        if (dbConnection.connection.readyState == 1)
            console.log("Database connected successfully !");
        else throw new Error("Mongo DB not connected");
    } catch (err) {
        console.error(`Error in DB Connection : ${err}`);
        throw err;
    }

    return dbConnection;
}
