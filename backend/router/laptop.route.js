const express = require("express")
const jwt = require("jsonwebtoken");
const laptopModel = require("../models/laptops.model");


const laptopRouter = express.Router()

laptopRouter.get("/", async (req, res) => {
    let token = req.headers.authorization;
    let querry = req.body;
    if (querry.device) {
        try {
            const decode = jwt.verify(token, process.env.key)
            if (decode) {
                const userId = decode.userId;
                const data = await laptopModel.find({ userId: userId })
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
            const data = await laptopModel.find()
            res.send(data );
        } catch (e) {
            res.send(e)
        }
    }
})

laptopRouter.get("/:id", async(req,res)=>{
    const id = req.params.id
    try {
        const data = await laptopModel.find({_id:id})
        res.send(data);
    } catch (e) {
        res.send(e)
    }
})

laptopRouter.post("/add", async (req, res) => {
    const payload = req.body
    try {
        const newPost = new laptopModel(payload);
        await newPost.save()
        res.send({ msg: "Post Saved", New_Post: newPost })
    } catch (e) {
        res.send({ "msg": e.message })
    }
})

laptopRouter.patch("/update/:id", async(req,res)=>{
    const payload=req.body
    const id=req.params.id;
    try{
        await laptopModel.findByIdAndUpdate(id,{...payload});
        let UpdatePost = await laptopModel.findById(id)
        res.send({msg:"Post Updated", Updated_Post:UpdatePost})
    }catch(e){
        res.send({"msg":e.message})
    }
})

laptopRouter.delete("/delete/:id", async(req,res)=>{
    const id=req.params.id;
    try{
        await laptopModel.findByIdAndDelete(id);
        res.send({msg:"Post Deleted"})
    }catch(e){
        res.send({"msg":e.message})
    }
})

module.exports = laptopRouter