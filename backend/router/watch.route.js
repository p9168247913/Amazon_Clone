const express = require("express")
const jwt = require("jsonwebtoken");
const watchModel = require("../models/watch.model");
const watchRouter = express.Router()

watchRouter.get("/", async (req, res) => {
    let token = req.headers.authorization;
    let querry = req.body;
    if (querry.device) {
        try {
            const decode = jwt.verify(token, process.env.key)
            if (decode) {
                const userId = decode.userId;
                const data = await watchModel.find({ userId: userId })
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
            const data = await watchModel.find()
            res.send(data);
        } catch (e) {
            res.send(e)
        }
    }
})

watchRouter.post("/add", async (req, res) => {
    const payload = req.body
    try {
        const newPost = new watchModel(payload);
        await newPost.save()
        res.send({ msg: "Post Saved", New_Post: newPost })
    } catch (e) {
        res.send({ "msg": e.message })
    }
})

watchRouter.patch("/update/:id", async (req, res) => {
    const payload = req.body
    const id = req.params.id;
    try {
        await watchModel.findByIdAndUpdate(id, { ...payload });
        let UpdatePost = await watchModel.findById(id)
        res.send({ msg: "Post Updated", Updated_Post: UpdatePost })
    } catch (e) {
        res.send({ "msg": e.message })
    }
})

watchRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await watchModel.findByIdAndDelete(id);
        res.send({ msg: "Post Deleted" })
    } catch (e) {
        res.send({ "msg": e.message })
    }
})

module.exports = watchRouter