import Content from "@/app/models/Content"
import Connect from "@/app/utils/Connect"
import { NextResponse } from "next/server"


export const DELETE = async (req,{params}) => {
    
    await Connect()
    try{
         await Content.findByIdAndDelete(params.contentid)
        return NextResponse.json({"msg":"Data Deleted Successfully"})
    }
    catch(e){
        return NextResponse.json({"msg":e.message})
    }
}

export const GET = async (req, {params}) => {
    await Connect();
    let data;
    try{
        data = await Content.findById(params.contentid);
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"msg":"something went wrong"});
    }
}