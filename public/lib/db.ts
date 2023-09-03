import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

if(!MONGODB_URI){
    throw new Error("Invalid environment variable: MONGODB_URL")
}

export const connectToMongoDB = async () => {
    try {
        const {connection} = await mongoose.connect(MONGODB_URI)

        if (connection.readyState === 1) {
            
            console.log("connected to mongoose");
            return true;
        }
        else {
            console.log("unexpected connection state", connection.readyState)
        }
    } catch (error: any) {
        
        console.log("Error connecting to MongoDB: ", error);
        throw error
    }
}