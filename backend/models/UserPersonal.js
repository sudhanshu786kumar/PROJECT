const mongoose=require('mongoose');
const schema= mongoose.Schema;

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
    collegeName:{
        type:String
    
    },
    gradYear:{
    type:String
    },
    graduated:{
    type:String
    },
    schoolName:{
    type:String
    },
    schoolYear:{
    type:String
    },
    skills:{
        type:String
    },
    certfication:{
        type:String
    },                          //employee details
    currEmployee:{
        type:String
    },
    destination:{
        type:String
    },
    description1:{
        type:String
    }
    ,
    monthExp1:{
    type:String
    },
    prevEmployee:{
        type:String
    },
    description2:{
        type:String
    },
    monthExp2:{
    type:String
    }
    
   
})


module.exports=mongoose.model("userSchema",userSchema)