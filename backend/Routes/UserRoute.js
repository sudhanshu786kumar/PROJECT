const express=require('express');
const userRoute=express.Router();
const multer=require('multer');
const Controllers=require('../Controllers/UserControl');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../frontend/public');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload=multer({storage:storage})



userRoute.post('/signup',upload.single("resume"),Controllers.Personaldata)
userRoute.put('/signup/employe/:id',Controllers.employData)
userRoute.get('/',Controllers.getAllUser)
userRoute.put('/signup/education/:id',Controllers.Educationdata)


module.exports=userRoute