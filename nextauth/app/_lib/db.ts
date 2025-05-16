import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

export default async function connectDB(){
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to DB successfully");
    } catch (error) {
        console.error("Error occured in connecting DB");
    }
}