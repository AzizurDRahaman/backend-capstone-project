import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();


app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("MongoDB connected");
        console.log(`Server is running on port ${process.env.PORT}`);
    }).catch(err => {
        console.log(err);
    })
})