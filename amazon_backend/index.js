require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
// const applianceModel = require("./schema/appliance.model");
// const laptopModel = require("./schema/laptops.model");
// const soundbarModel = require("./schema/soundbar.model");
// const telivisionModel = require("./schema/telivision.model");
// const UserModel = require("./schema/user.model");
// const watchModel = require("./schema/watch.model");

const laptop = require("./router/laptop.route")

const connect = require("./config/mongoose.config")

const app =  express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/", laptop)


app.listen(8080,()=>{  
  connect()
  .then(()=>{
    console.log("Connected to Database")
  }).catch((e)=>{
    console.log(e)
  })
  console.log("Server is running on port 8080")
})
