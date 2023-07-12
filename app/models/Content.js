import mongoose from "mongoose"

import User from "./User"
import Topic from "./Topic"

const ContentSchema = new mongoose.Schema({
    topic_id:{type:mongoose.Schema.Types.ObjectId,ref:"Topic"},
    content_title:{type:String},
    content_text:{type:String},
    author:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    views:{type:Number},
    status:{type:Boolean},

},
{
    timestamps:true
}
)

export default mongoose.models.Content || mongoose.model("Content",ContentSchema)