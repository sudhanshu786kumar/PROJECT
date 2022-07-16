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
        type:Number,
       
    },
    address:{
        addr1:String,
        adr2:String,
        city:String,
        state:String,
        postal:String,
        country:String,
    }
    ,
    workexp:{
year:Number,
month:String
    },
    Pskills:{
        type:String,
       
    },
    resume:{
        type:String,
        required:false,
        default:"null"
      
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
    type:Number
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
    type:Number
    },
    prevemp:{
        type:String
    },
    pjobdesc:{
        type:String
    },
    pexpm:{
    type:Number
    }
    
   
})


module.exports=mongoose.model("userSchema",userSchema)