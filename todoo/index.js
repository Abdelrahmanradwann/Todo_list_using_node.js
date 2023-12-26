const mongoose = require("mongoose")

const express = require("express");
const app = express();
//const path = require('path');

const listRoutes = require("./routes/lists")

const url = "mongodb+srv://boodyahmed:Boody123456777@cluster0.a0vxcji.mongodb.net/codeZone"

mongoose.connect(url).then(()=>{
    "connected";
})
app.use(express.json());



app.use(listRoutes);



app.listen(4000,()=>{
    console.log("here");
});
