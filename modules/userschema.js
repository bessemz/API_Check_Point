const mongoose=require('mongoose')
const {Schema}=mongoose
const userschema=new Schema({
    name:{type:String,required:[true,'Name is required']},
    age:Number,
    email:String
})

module.exports=mongoose.model("user",userschema)