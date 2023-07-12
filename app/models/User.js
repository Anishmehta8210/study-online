import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    contact:{type:String},
    password:{type:String},
    isVerified:{type:Boolean,default:false},
    isAdmin:{type:Boolean,default:false},
    forgetPasswordToken:String,
    forgetPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,

},
{
    timestamps:true
}
)

export default mongoose.models.User ||  mongoose.model("User",UserSchema)