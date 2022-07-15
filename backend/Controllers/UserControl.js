
const personalSchema=require('../models/UserPersonal');


const getAllUser=async(req,res)=>{

    let data=await personalSchema.find()
    if(!data){
        res.status(401).json({
            msg:"no data available"
        })
    }return res.status(200).json(
        data)
}








const PersonalData=async (req,res)=>{
const{name,email,mobile,address,workexp,skills}=req.body;
console.log(req.file.originalname)
let data;
try{
data = new personalSchema({
    name,
    email,
    mobile,
    address,
    workexp,
    skills,
    resume:req.file.originalname
})
await data.save()
}catch(err){
    console.log(err)
}
if(!data){
    res.status(500).json({
        msg:"data not uploaded"
    })
}return res.status(201).json(data)

}

const employData=async(req,res)=>{
    const{cemp,dest,jobdesc,expm,prevemp,pjobdesc,pexpm}=req.body
    let id=req.params.id;
    let data;
    try{data=await personalSchema.findByIdAndUpdate(id,{
        
        
                cemp,dest,jobdesc,expm,prevemp,pjobdesc,pexpm
            
            
        }  )  
        await data.save()
    }catch(err){
        console.log(err)
    }
    
    if(!data){
        res.status(500).json({
            msg:"data not uploaded"
        })
    }return res.status(201).json(data)
}


const Educationdata=async(req,res)=>{
const{clg,YOP,isgraduated,graduateSchool,NOY,skills,certf}=req.body
let id=req.params.id;
let data;
try{
    data=await personalSchema.findByIdAndUpdate(id,{
        clg,YOP,isgraduated,graduateSchool,NOY,skills,certf
    })
}
catch(err){
    console.log(err)
}


if(!data){
    res.status(500).json({
        msg:"data not uploaded"
    })
}return res.status(201).json(data)
}

exports.Personaldata=PersonalData;
exports.employData=employData;
exports.getAllUser=getAllUser;
exports.Educationdata=Educationdata;