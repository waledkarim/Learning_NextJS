import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

export default async function connectDB(){
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to DB");
    } catch (error) {
        console.error("Error connecting DB: ", error);
    }
}