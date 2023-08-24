import mongoose from "mongoose"

const UserSchema= new mongoose.Schema({
    email:{
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [/^\w+(\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"]
},
password: {
    type: String,
    required: [true, "Password is required"],
}, 
}, {timestamps: true})

const User = mongoose.models.User || mongoose.model("User", UserSchema)

// const User = mongoose.model("User",UserSchema)

export default User;
