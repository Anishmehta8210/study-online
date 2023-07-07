// for single vieew

import Topic from "@/app/models/Topic";
import Connect from "@/app/utils/Connect";
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {
    let data;
    await Connect()
    try{
        data = await Topic.findById(params.topicid)
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"msg":e.message})
    }
}

export const DELETE = async (req,{params}) => {
    
    await Connect()
    try{
         await Topic.findByIdAndDelete(params.topicid)
        return NextResponse.json({"msg":"Data Deleted Successfully"})
    }
    catch(e){
        return NextResponse.json({"msg":e.message})
    }
}