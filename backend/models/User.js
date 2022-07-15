const mongoose=require('mongoose');
const schema= mongoose.Schema;
const userSchema = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
    ,
    workexp:{
type:String,
required:true
    },
    skills:{
        type:String,
        required:true
    },
    resume:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model("userSchema",userSchema)