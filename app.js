require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:true,credentials:true}));
app.use('/uploads',express.static('uploads'));

const connectdb= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
        })
console.log("Mongodb connected");
    }catch(err){
        console.log(err);
    }
}

const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.use('/api/auth',authRoutes);
app.use('/api/reviews',reviewRoutes);
connectdb();

       app.listen(3001,()=>console.log('Server is running on port 3001'))
