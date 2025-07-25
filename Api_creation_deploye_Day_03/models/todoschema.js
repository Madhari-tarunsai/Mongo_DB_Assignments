const mongoose=require("mongoose")

const todoschema=new mongoose.Schema({name:{type:String,required:true,unique:true,trim:true,minLength:3,uppercase:true},
body:{
    type:String,required:true
}},{timestamps:true})
const user=new mongoose.model("to_do_list",todoschema)
module.exports={user}