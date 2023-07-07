import Content from "@/app/models/Content";
import Connect from "@/app/utils/Connect";
import { NextResponse } from "next/server";


// One by one filter view in sidebar
export const GET = async (req,{params}) => {
    await Connect();
    let data;
    let{topicid} = params
    try{
        data = await Content.find({topic_id:topicid})
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"msg":e.message})
    }

}

