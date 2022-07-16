const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Schemas=new Schema({
  name:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

module.exports=mongoose.model("loginSchema",Schemas)