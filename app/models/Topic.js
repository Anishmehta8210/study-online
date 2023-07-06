import mongoose from "mongoose"


const TopicSchema = new mongoose.Schema({
    topic_title:{type:String},
    description:{type:String},
    

},
{
    timestamps:true
}
)

export default mongoose.models.Topic || mongoose.model("Topic",TopicSchema)