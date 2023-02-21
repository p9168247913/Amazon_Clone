const express = require("express")

const {laptopData, watchData, applianceData, soundbarData, televisionData} =require("../controller/laptop.controller")

const app = express.Router();


app.get("/laptop", laptopData)

// watch

app.get("/watch", watchData)

// appliance

app.get("/appliance", applianceData)

// soundbar

app.get("/soundbar", soundbarData)

//television

app.get("/television", televisionData)

module.exports = app