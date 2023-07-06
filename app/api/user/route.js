import User from "@/app/models/User"
import Connect from "@/app/utils/Connect"
import { NextResponse } from "next/server";

export const GET =  async () => {

    await Connect();
    let data;
    try{
        data = await User.find({})
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"msg":"something went wrong"})
    }

}

export const POST = async (req) => {
    await Connect();

    let {name,email,contact,password} = await req.json()
    let data;
    // destructring
    data = new User({name,email,contact,password})
    try{
       await  data.save();
       return NextResponse.json({data,"msg":"Data Insereted"})
    }
    catch(e){
        return NextResponse.json({"msg":e.message})
    }


}

