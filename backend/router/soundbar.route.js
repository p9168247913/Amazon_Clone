const express = require("express")
const jwt = require("jsonwebtoken");
const soundbarModel = require("../models/soundbar.model");
const soundRouter = express.Router()


soundRouter.get("/", async (req, res) => {
    let token = req.headers.authorization;
    let querry = req.body;
    if (querry.device) {
        try {
            const decode = jwt.verify(token, process.env.key)
            if (decode) {
                const userId = decode.userId;
                const data = await soundbarModel.find({ userId: userId })
                let filteredData = data.filter((e) => {
                    return e.device === querry.device
                });
                res.send({ Data: filteredData });
            } else {
                res.send({ Data: [] })
            }
        } catch (e) {
            res.send(e)
        }
    } else {
        try {
            const data = await soundbarModel.find()
            res.send( data );
        } catch (e) {
            res.send(e)
        }
    }
})

soundRouter.post("/add", async (req, res) => {
    const payload = req.body
    try {
        const newPost = new soundbarModel(payload);
        await newPost.save()
        res.send({ msg: "Post Saved", New_Post: newPost })
    } catch (e) {
        res.send({ "msg": e.message })
    }
})

soundRouter.patch("/update/:id", async(req,res)=>{
    const payload=req.body
    const id=req.params.id;
    try{
        await soundbarModel.findByIdAndUpdate(id,{...payload});
        let UpdatePost = await soundbarModel.findById(id)
        res.send({msg:"Post Updated", Updated_Post:UpdatePost})
    }catch(e){
        res.send({"msg":e.message})
    }
})

soundRouter.delete("/delete/:id", async(req,res)=>{
    const id=req.params.id;
    try{
        await soundbarModel.findByIdAndDelete(id);
        res.send({msg:"Post Deleted"})
    }catch(e){
        res.send({"msg":e.message})
    }
})

module.exports = soundRouter