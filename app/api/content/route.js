import Content from "@/app/models/Content";
import Connect from "@/app/utils/Connect"
import { NextResponse } from "next/server";

export const GET = async () => {
    await Connect();
    let data;
    try{
        data =  await Content.find({});
        return NextResponse.json({data});
    }
    catch(e){
        return NextResponse.json({"msg":"something went wrong"});
    }
} 

export const POST = async (req) => {
    await Connect();

    let records = await req.json()
    let data;
    data = new Content(records)


    data = new Content(records)
    try{
       await  data.save();
       return NextResponse.json({data,"msg":"Data Insereted"})
    }
    catch(e){
        return NextResponse.json({"msg":e.message})
    }


}

