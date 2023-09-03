import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { connectToMongoDB } from "../../../../public/lib/db";

export async function GET(req: Request) {
    try {
        await connectToMongoDB();

    
    const authToken = cookies().get("token")

    if (authToken) {
        const tokenValue = authToken.value;
        const decodedValue = jwt.decode(tokenValue)
        console.log(decodedValue);

        if (decodedValue && typeof decodedValue === 'object' && decodedValue.exp) {
            decodedValue.exp = Math.floor(Date.now())
            //need to make functionality to invalidate/blacklist older jwt tokens eventually
            cookies().delete('token');
            return NextResponse.json({message:"Sign-out successful"})
        }
  
    }

} catch (error){
    return NextResponse.json({ error: "Sign-out failed" }, { status: 500 });
}
    return NextResponse.redirect('/');
    
}