// APPROCH 1 : Simple

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// // Create the Express application (request–response handler)
// import express from "express";
// const app = express();

// (async () => {
//   try {
    
//     // Connect to MongoDB with MONGO_URI must already contain host + credentials and DB_NAME is database to be use.
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    
//     // Listen for Express application–level runtime errors
//     app.on("error", (error) => {
//       console.error(`Express app error: ${error}`);
//       process.exit(1);
//     });

//     // Start the HTTP server and bind Express to the network port
//     app.listen(process.env.PORT, () => {
//       console.log(`App listening on port ${process.env.PORT}`);
//     });
    
//   } catch (error) {

//     // If the database connection fails, the server will not start
//     console.error(`Startup error: ${error}`);
//     process.exit(1);

//   }
// })();

// Approch 2 : modules

import donenv from "dotenv";
import connectDB from "./db/index.js";

donenv.config({
    path: "./env"
})

connectDB();