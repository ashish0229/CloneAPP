import mongoose from "mongoose";
import {DB_name} from "./constants.js";

const connectDB = async () => {
    try { 
        const connectionInstanceDB = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected: ${connectionInstanceDB.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
export const DB_name = "AshprojectDB";