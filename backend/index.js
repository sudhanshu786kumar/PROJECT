const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const route=require('./Routes/Adminroute')
const userRoute=require('./Routes/UserRoute');
const cookieParser=require('cookie-parser')
// app.use(express.static(''))
app.use(cookieParser())
app.use(express.json());
app.use(cors({
    credentials:true,origin:"http://localhost:3000"
}));
app.use('/admin',route)
app.use('/user',userRoute)
mongoose.connect("mongodb+srv://admin:FV7KSpLEENd2C6Il@cluster0.jtwcc.mongodb.net/?retryWrites=true&w=majority").then(res=>console.log("conneceted to DB")).then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err));



