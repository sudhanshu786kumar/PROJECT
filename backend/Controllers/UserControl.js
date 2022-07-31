
const personalSchema = require('../models/UserPersonal');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const JWT_SECRET_KEY = "bruteforce"
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


const signIn = async (req, res,next) => {
    const { email, pwd } = req.body;
    let existUser;
    try {
        existUser = await personalSchema.findOne({ email: email })

    } catch (err) {
        return new Error(err);
    }

    if (!existUser) {
        return res.status(400).json({
            msg: "no user"
        })
    }

    const ispwdcrt = bcrypt.compareSync(pwd, existUser.pwd)
    if (!ispwdcrt) {
        return res.status(400).json({
            msg: "inavlid"
        })
    }
    const token = jwt.sign({ id: existUser._id }, JWT_SECRET_KEY, {
        expiresIn: "30s"
    });

    if (req.cookies[`${existUser._id}`]) {
        req.cookies[`${existUser._id}`] = "";
      }
    

    res.cookie(String(existUser._id), token, {
        path: '/',
        expires: new Date(Date.now() + 1000 * 30),
        httpOnly: true,
        sameSite:"lax",

    });
    return res.status(200).json({
        msg: " logined!", user: existUser, token
    })


}




const PersonalData = async (req, res) => {
    const { name,
        email,
        pwd,
        mobile,
        addr1,
        addr2,
        city,
        postal,
        country,
        worky,
        workm,
        Pskills,
    } = req.body;

    let data;
    const hashPassword = bcrypt.hashSync(pwd)
    try {
        data = new personalSchema({
            name,
            email,
            pwd:hashPassword,
            mobile,
            addr1,
            addr2,
            city,
            postal,
            country,
            worky,
            workm,
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
    const { currEmployee,destination,description1,monthExp1,prevEmployee,description2,monthExp2} = req.body
    let id = req.params.id;
    let data;
    try {
        data = await personalSchema.findByIdAndUpdate(id, {


            currEmployee,destination,description1,monthExp1,prevEmployee,description2,monthExp2


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
    const { collegeName,gradYear,graduated,schoolName,schoolYear,skills,certfication} = req.body
    let id = req.params.id;
    let data;
    try {
        data = await personalSchema.findByIdAndUpdate(id, {
            collegeName,gradYear,graduated,schoolName,schoolYear,skills,certfication
        })
        await data.save()
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
    const { name,
        email,
        
        mobile,
        addr1,
        addr2,
        city,
        postal,
        country,
        worky,
        workm,
        Pskills,
    } = req.body;

    let id = req.params.id;
    let data
    try {
        data = await personalSchema.findByIdAndUpdate(id, {
            name,
            email,
            mobile,
            addr1,
            addr2,
            city,
            postal,
            country,
            worky,
            workm,
            Pskills,
            resume: req.file.originalname
        })
        await data.save()
    }
    catch (err) {
        console.log(err)
    }
    if (!data) {
        res.status(404).json({
            msg: "no data"
        })
    } return res.status(201).json(data)
}

const refreshToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    const prevToken = cookies.split("=")[1];
    if (!prevToken) {
      return res.status(400).json({ message: "Couldn't find token" });
    }
    jwt.verify(String(prevToken), process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(403).json({ message: "Authentication failed" });
      }
      res.clearCookie(`${user.id}`);
      req.cookies[`${user.id}`] = "";
  
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "35s",
      });
      console.log("Regenerated Token\n", token);
  
      res.cookie(String(user.id), token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 30), // 30 seconds
        httpOnly: true,
        sameSite: "lax",
      });
  
      req.id = user.id;
      next();
    });
  };


const signOut=()=>{
    const cookies = req.headers.cookie;
    const token = cookies.split("=")[1];
    console.log(token);
    if (!token) {
        res.status(404).json({
            msg: "no token"
        })
    }
    jwt.verify(String(token), JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({
                msg: "invalid token"
            })
        }
        res.clearCookie(`${user.id}`);
        req.cookies[`${user.id}`]="";
       return res.status(200).json({
        msg:"logged out"
       })
    })
   
}


const verifyToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    const token = cookies.split("=")[1];
    console.log(token);
    if (!token) {
        res.status(404).json({
            msg: "no token"
        })
    }
    jwt.verify(String(token), JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(400).json({
                msg: "invalid token"
            })
        }
        console.log(user.id)

        req.id = user.id;
    })
    next();
}


const getUser = async (req, res, next) => {
    const userId = req.id;
    let user;
    try {
        user = await personalSchema.findById(userId, "-pwd");

    } catch (err) {
        return new Error(err)
    }
    if (!user) {
        return res.status(404).json({
            msg: "user not found"
        })
    } return res.status(200).json({ user })


}



exports.Personaldata = PersonalData
exports.employData = employData;
exports.getAllUser = getAllUser;
exports.Educationdata = Educationdata;
exports.signIn = signIn;
exports.getSpecificUser = getSpecificUser;
exports.putSpecificUser = putSpecificUser;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.signOut=signOut;
exports.refreshToken = refreshToken;