const express = require("express")
const jwt = require("jsonwebtoken");
const applianceModel = require("../models/appliance.model");


const applianceRouter = express.Router()

applianceRouter.get("/", async (req, res) => {
    let token = req.headers.authorization;
    let querry = req.body;
    if (querry.device) {
        try {
            const decode = jwt.verify(token, process.env.key)
            if (decode) {
                const userId = decode.userId;
                const data = await applianceModel.find({ userId: userId })
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
            const data = await applianceModel.find()
            res.send(data );
        } catch (e) {
            res.send(e)
        }
    }
})

applianceRouter.get("/:id", async(req,res)=>{
    const id = req.params.id
    try {
        const data = await applianceModel.find({_id:id})
        res.send(data);
    } catch (e) {
        res.send(e)
    }
})

applianceRouter.post("/add", async (req, res) => {
    const payload = req.body
    try {
        const newPost = new applianceModel(payload);
        await newPost.save()
        res.send({ msg: "Post Saved", New_Post: newPost })
    } catch (e) {
        res.send({ "msg": e.message })
    }
})

applianceRouter.patch("/update/:id", async(req,res)=>{
    const payload=req.body
    const id=req.params.id;
    try{
        await applianceModel.findByIdAndUpdate(id,{...payload});
        let UpdatePost = await applianceModel.findById(id)
        res.send({msg:"Post Updated", Updated_Post:UpdatePost})
    }catch(e){
        res.send({"msg":e.message})
    }
})

applianceRouter.delete("/delete/:id", async(req,res)=>{
    const id=req.params.id;
    try{
        await applianceModel.findByIdAndDelete(id);
        res.send({msg:"Post Deleted"})
    }catch(e){
        res.send({"msg":e.message})
    }
})

module.exports = applianceRouter