const express = require("express")

const {laptopData, watchData, applianceData, soundbarData, televisionData, televisionDelete, soundbarDelete, watchDelete, applianceDelete, laptopDelete} =require("../controller/laptop.controller")

const {telivisionPostData, appliancePostData, soundbarPostData, watchPostData, laptopPostData, televisionPatch, laptopPatch, appliancePatch, watchPatch, soundbarPatch} = require('../controller/post.controller')

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

// login signup
const {
  signup,
  login
} = require("../controller/user.controller");

app.post("/register", signup);
app.post("/login", login);

//delete

app.delete("/telivision/:id", televisionDelete)

app.delete("/watch/:id", watchDelete)

app.delete("/appliance/:id", applianceDelete)

app.delete("/soundbar/:id", soundbarDelete)

app.delete("/laptop/:id", laptopDelete)

//patch

app.patch("/telivision/:_id", televisionPatch)

app.patch("/laptop/:_id", laptopPatch)

app.patch("/appliance/:_id", appliancePatch)

app.patch("/watch/:_id", watchPatch)

app.patch("/soundbar/:_id", soundbarPatch)


module.exports = app