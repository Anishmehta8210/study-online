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