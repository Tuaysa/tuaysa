import User from "@/models/user";
import { NextResponse } from "next/server";
import { connectToMongoDB } from "../../../../public/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export async function POST(req: Request) {
    try {
        await connectToMongoDB();
        console.log("passing")
        
        const body = await req.json();
        const {email, password} = body;

        const hashedPassword = await bcrypt.hash(password, 10);

        if (!email||!password) {
            return NextResponse.json({message:"invalid fields"}, {status:400})
        }

        const isUserPresent=await User.findOne({email});
        if (isUserPresent){
            console.log("passing 2")
            return NextResponse.json({message:"User already exists"}, {status:409});
        }

        
        const user = new User({email, password:hashedPassword});
        // await User.create({email, password:hashedPassword});
        await user.save();
        // const token = jwt.sign({email}, 'rfneribfwoeirnaijnfoierbf')
        const response = NextResponse.json({message:"User Registration Successful"}, {status: 201})
        // response.cookies.set('token', token);
        return response;
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "An error occurred while registering the user", error}, {status:500})
    
    }
} 