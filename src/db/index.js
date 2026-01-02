import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB () {
    try{
        const connectionInstance = await mongoose.connect (`${process.env.MONGO_URI}/${DB_NAME}`);
        const { name, host, port } = connectionInstance.connection;

        console.log(
        `✅ MongoDB Connected Successfully!
        📂 Database : ${name}
        🌍 Host     : ${host}
        🔌 Port     : ${port}`
        );


        
    }catch (error){
        console.error(`Mongo DB Connection Error ${error}`);
        process.exit(1);
        // read about coude we can give in process.exit()
    }

};
export default connectDB;
