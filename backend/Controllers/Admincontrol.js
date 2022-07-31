const admin = require('../models/admin');
const formdata=require('../models/AdminForm')
const bcrypt = require('bcryptjs')
const postData = async (req, res, next) => {
    const { name, password } = req.body;
let admins;
    try {
         admins = new admin({
            name,
            password
        })

        const salt = await bcrypt.genSalt(10);
        admins.password = await bcrypt.hash(admins.password, salt);


        admins.save()
      
    } catch (error) {
        console.log(error)
    }
    return res.status(201).json((
        admins
    ))

}

const logData = async (req, res) => {
    const { name, password } = req.body;
    const admins = await admin.findOne({ name: name });
    if (admins) {
        const vpassword = await bcrypt.compare(password, admins.password);
        if (vpassword) {
            res.status(200).json({ message: "Log in Success" });
        } else {
            res.status(400).json({ error: "Login failed" });
        }
    } else {
        res.status(401).json({ error: "User does not exist" });
    }

}

const formData = async (req, res) => {
    const { jobid, jobtitle,
         date, role, resp, compname,
          exp, salary, loc, skills, deg, compinfo, emptype,
           industry, keyword, jobdesc } = req.body;
    let data;
    try {
        data = await new formdata({
            jobid, jobtitle, date, role, resp, compname, exp, salary, loc, skills, deg, compinfo, emptype, industry, keyword:String(keyword), jobdesc
        })
data.save();
    } catch (error) {
console.log(error)
    }

if(!data){
    res.status(401).json({
        msg:"error adding"
    })
}return res.status(201).json(data)
}



exports.postData = postData;
exports.logData = logData;
exports.formData=formData;