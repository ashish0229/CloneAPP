//require ('dotenv').config('./.env');
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/db.js';

dotenv.config({ path: './.env' });

const app = express();
app.on('error', ({error}) => {
    console.log(`Error occured: ${error}`);
    throw error;
});
app.listen(process.env.PORT || 3000, () => {
    console.error(`server is running on port ${process.env.PORT}`);
});
connectDB()
//we use then catch to handle promise returned by connectDB as connecting to DB takes time
    .then(() => {
        app.listen(process.env.PORT || 4000, () => {
            console.log(`Server is running on port: ${process.env.PORT || 4000}`);
        });
    })
    .catch((error) => {
        console.error('Database connection failed:', error);
});
