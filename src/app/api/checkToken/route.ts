import User from "@/models/user";
import { NextResponse } from "next/server";
import { connectToMongoDB } from "../../../../public/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers'

export async function GET(req: Request) {
    try {
        const authToken = cookies().get("token")
        const secret= process.env.SECRET;

        if (authToken) {
            try{
                 
            if (secret) {
                const verifiedToken = jwt.verify(authToken.value.toString(), secret)

                if (verifiedToken) {

                    return NextResponse.json({ authenticated: true, data: verifiedToken }, {status:200});
                }
            }
            }
            
            catch (error) {
                console.log(error);
                return NextResponse.json({ authenticated: false }, );
            }
        }
        else {
            return NextResponse.json({ authenticated: false }, );
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ authenticated: false, message: "An error occurred while checking authentication", error }, { status: 500 });
    }
} 