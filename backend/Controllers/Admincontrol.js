const admin = require('../models/admin');
const formdata=require('../models/AdminForm')
const bcrypt = require('bcrypt')
const postData = async (req, res, next) => {
    const { name, password } = req.body;

    try {
        const admin = new schema({
            name,
            password
        })

        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(admin.password, salt);


        admin.save().json({ admin });
      
    } catch (error) {
        console.log(error)
    }
    return res.status(201).json((
        admin
    ))

}

const logData = async (req, res) => {
    const { name, password } = req.body;
    const admin = await schema.findOne({ name: name });
    if (admin) {
        const vpassword = await bcrypt.compare(password, admin.password);
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
    const { jobid, jobtitle, date, role, resp, compname, exp, salary, loc, skills, deg, compinfo, emptype, industry, keyword, jobdesc } = req.body;
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