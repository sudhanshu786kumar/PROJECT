const mongoose=require('mongoose');
const schema=mongoose.Schema;
const formSchema= new schema({
    jobid:{
        type:String
    },
    jobtitle:{
        type:String
    },
    date:{
        type:String
    },
    role:{
        type:String
    },
    resp:{
        type:String
    },
    compname:{
        type:String
    },
    exp:{
        type:String
    },
    salary:{
        type:String
    },
    loc:{
        type:String
    },
    skills:{
        type:String
    },
    deg:{
        type:String
    },
    compinfo:{
        type:String
    },
    emptype:{
        type:String
    },
    industry:{
        type:String
    },
    keyword:{
        type:String
    },
    jobdesc:{
        type:String
    },

})

module.exports=mongoose.model("adminForm",formSchema)