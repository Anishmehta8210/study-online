import User from "@/app/models/User";
import Connect from "@/app/utils/Connect"
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import JWT from 'jsonwebtoken'

export const POST = async (req) => {
    await Connect();
    try{
        let records = await req.json();
        const {email, password}  = records;

        // if user exist 
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({error:"User does not exist"},{status:400})
        }

        // check password is correct
        const validPassword = await bcryptjs.compare(password, user.password)

        if(!validPassword){
            return NextResponse.json({error:"wrong password"},{status:400})
        }

        //create token here for data
        const tokenData = {
            id:user._id,
            name:user.name,
            email:user.email
        }

        const token = await JWT.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn:"1h"})

        const response  = NextResponse.json({message:"Login Successfully",success:true})

        response.cookies.set("token",token,{
            httpOnly:true,
        })

        return response;

    }
    catch(e){
        return NextResponse.json({error:e.message},{status:500})
    }
}
