const express = require("express")

const {laptopData, watchData, applianceData, soundbarData, televisionData} =require("../controller/laptop.controller")

const {telivisionPostData, appliancePostData, soundbarPostData, watchPostData, laptopPostData} = require('../controller/post.controller')

const app = express.Router();


app.get("/laptop", laptopData)

// watch

app.get("/watch", watchData)

// appliance

app.get("/appliance", applianceData)

// soundbar

app.get("/soundbar", soundbarData)

//television

app.get("/telivision", televisionData)


app.post("/laptop", laptopPostData)

app.post("/watch", watchPostData)

app.post("/appliance", appliancePostData)

app.post("/soundbar", soundbarPostData)

app.post("/telivision", telivisionPostData)

module.exports = app