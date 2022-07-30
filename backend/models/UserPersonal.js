const mongoose=require('mongoose');
const schema= mongoose.Schema;
const addressSchema=mongoose.Schema({
    
})
const userSchema = new schema({
    name:{
        type:String,                   //personal details
        
    },
    email:{
        type:String,
      
    },
    pwd:{
        type:String,
    },

    mobile:{
        type:String,
       
    },
    addr1:{
        type:String,
       
    },
    addr2:{
        type:String
    },
    city:{
        type:String
    },
    postal:{
        type:String
    },
    country:{

    },
    worky:{
type:String
    },
    workm:{
        type:String
    },
    Pskills:{
        type:String,
       
    },
    resume:{
        type:String,
       
      
    },                                    //education details
    clg:{
        type:String
    
    },
    YOP:{
    type:String
    },
    isgraduated:{
    type:String
    },
    graduateSchool:{
    type:String
    },
    NOY:{
    type:String
    },
    Eskills:{
        type:String
    },
    certf:{
        type:String
    },                          //employee details
    cemp:{
        type:String
    },
    dest:{
        type:String
    },
    jobdesc:{
        type:String
    }
    ,
    expm:{
    type:String
    },
    prevemp:{
        type:String
    },
    pjobdesc:{
        type:String
    },
    pexpm:{
    type:String
    }
    
   
})


module.exports=mongoose.model("userSchema",userSchema)