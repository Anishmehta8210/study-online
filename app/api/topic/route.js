import Topic from "@/app/models/Topic";
import Connect from "@/app/utils/Connect"
import { NextResponse } from "next/server";
// for all topics
export const GET =  async () => {

    await Connect();
    let data;
    try{
        data = await Topic.find({})
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"msg":"something went wrong"})
    }

}

export const POST = async (req) => {
    await Connect();

    let {topic_title,description} = await req.json()
    let data;

    data = new Topic({topic_title,description})
    try{
       await  data.save();
       return NextResponse.json({data,"msg":"Data Insereted"})
    }
    catch(e){
        return NextResponse.json({"msg":e.message})
    }


}

