
const personalSchema = require('../models/UserPersonal');


const getAllUser = async (req, res) => {

    let data = await personalSchema.find()
    if (!data) {
        res.status(401).json({
            msg: "no data available"
        })
    } return res.status(200).json(
        data)
}


const getSpecificUser = async (req, res) => {
    let id = req.params.id;
    let data = await personalSchema.findById(id)
    if (!data) {
        res.status(404).json({
            msg: "not found"
        })
    } return res.status(201).json(data)
}


const signIn = async (req, res) => {
const{email,password}=req.body;
 
let pwds=await personalSchema.findOne({email:email})

if(pwds){
    let rpwd=await personalSchema.findOne({pwd:password})
    if(rpwd){ res.status(200).json({
        msg:"logined !!"
    })}
    else{
        res.status(400).json({
            msg:"logined failed!!"
        })
    }
   
}
else{ res.status(401).json({
    msg:"no such user  !!"
})}

}






const PersonalData = async (req, res) => {
    const { name, email, mobile, address, workexp, Pskills, pwd } = req.body;

    let data;
    try {
        data = new personalSchema({
            name,
            email,
            pwd,
            mobile,
            address,
            workexp,
            Pskills,
            resume: req.file.originalname
        })
        await data.save()
    } catch (err) {
        console.log(err)
    }
    if (!data) {
        res.status(500).json({
            msg: "data not uploaded"
        })
    } return res.status(201).json(data)

}

const employData = async (req, res) => {
    const { cemp, dest, jobdesc, expm, prevemp, pjobdesc, pexpm } = req.body
    let id = req.params.id;
    let data;
    try {
        data = await personalSchema.findByIdAndUpdate(id, {


            cemp, dest, jobdesc, expm, prevemp, pjobdesc, pexpm


        })
        await data.save()
    } catch (err) {
        console.log(err)
    }

    if (!data) {
        res.status(500).json({
            msg: "data not uploaded"
        })
    } return res.status(201).json(data)
}


const Educationdata = async (req, res) => {
    const { clg, YOP, isgraduated, graduateSchool, NOY, Eskills, certf } = req.body
    let id = req.params.id;
    let data;
    try {
        data = await personalSchema.findByIdAndUpdate(id, {
            clg, YOP, isgraduated, graduateSchool, NOY, Eskills, certf
        })
    }
    catch (err) {
        console.log(err)
    }


    if (!data) {
        res.status(500).json({
            msg: "data not uploaded"
        })
    } return res.status(201).json(data)
}

const putSpecificUser = async (req, res) => {          //specific user put
    const { name,email,pwd,
        mobile,
        address,
        workexp,
        Pskills,} = req.body
    let id = req.params.id;
let data
    try{ 
        data = await personalSchema.findByIdAndUpdate(id, {
            name,
            email,
            pwd,
            mobile,
            address,
            workexp,
            Pskills,
            resume: req.file.originalname
    })}
    catch(err){
        console.log(err)
    }
    if(!data){
        res.status(404).json({
            msg:"no data"
        })
    }return res.status(201).json(data)
}

exports.Personaldata = PersonalData;
exports.employData = employData;
exports.getAllUser = getAllUser;
exports.Educationdata = Educationdata;
exports.signIn = signIn;
exports.getSpecificUser = getSpecificUser;
exports.putSpecificUser=putSpecificUser;