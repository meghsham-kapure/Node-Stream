import express from "express";
import { connectMongoDB } from "./db/connect-mongo.js";

console.log(`Node-Stream started at ${new Date().toLocaleString()}`);

const mongoConnection = await connectMongoDB();
