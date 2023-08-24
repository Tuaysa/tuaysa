import mongoose from "mongoose";

const connectDB = async() =>{

    const mongodb_uri = process.env.MONGODB_URI
    try {
        await mongoose.connect(`${mongodb_uri}`)
        console.log("connect")
    } catch (error) {
        console.log(error)
    }
    
}

export default connectDB;