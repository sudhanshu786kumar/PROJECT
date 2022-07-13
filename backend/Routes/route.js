const express=require('express');
const router=express.Router();
const schema=require('../models/admin');
const Controllers=require('../Controllers/control');
const AdminForm = require('../models/AdminForm');

router.post('/',Controllers.postData);
router.post('/login',Controllers.logData);
router.post('/data',Controllers.formData);
router.get('/data',async(req,res)=>{
    let data= await AdminForm.find()
    if(!data){
        res.status(404).json({
            msg:"no data"
        })
    }return res.json(data)
})
module.exports=router