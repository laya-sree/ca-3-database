require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 8000;
const userRoutes = require('./userRoutes');

app.use(express.json())
//app.use('/',userRoutes)

const ConnectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to DB');
    }catch(err){
        console.log('connection failed');
    }
};

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost/:${PORT}`)
    ConnectDB()
});