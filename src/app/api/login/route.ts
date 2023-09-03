import User from "@/models/user";
import { NextResponse } from "next/server";
import { connectToMongoDB } from "../../../../public/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export async function POST(req: Request) {
    try {
        await connectToMongoDB();
        
        const body = await req.json();
        const {email, password} = body;

        // const hashedPassword = await bcrypt.hash(password, 10);

        if (!email||!password) {
            return NextResponse.json({message:"invalid fields"}, {status:400})
        }

        const isUserPresent=await User.findOne({email});
        if (!isUserPresent){
            return NextResponse.json({message:"invalid email"}, {status:409});
        } else {

            const isMatch = await bcrypt.compare(password, isUserPresent.password);

        
            // const user = new User({email, password:hashedPassword});
            // await User.create({email, password:hashedPassword});
            // await user.save();
            const secret= process.env.SECRET; 
            if (secret) {
                const token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7), email}, secret)
                const response = NextResponse.json({message:"User Login Successful"}, {status: 201})
                response.cookies.set({name:'token', value:token, maxAge: 60 * 60 * 24 * 7, httpOnly: true, sameSite: "strict", secure: true});
            
                return response;
            }

            else {
                return NextResponse.json({message:"An error occurred while logging in the user"}, {status:500})
            }
            
        }
        
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "An error occurred", error}, {status:500})
    
    }
} 