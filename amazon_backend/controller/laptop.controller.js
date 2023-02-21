const laptopModel = require("../schema/laptops.model")
const applianceModel = require("../schema/appliance.model");
const soundbarModel = require("../schema/soundbar.model");
const telivisionModel = require("../schema/telivision.model");
// const UserModel = require("../schema/user.model");
const watchModel = require("../schema/watch.model");



const laptopData = async (req,res)=>{
    try{
        let laptop = await laptopModel.find({});
        res.status(200).send(laptop);
    }catch(e){
        res.status(401).send("Invalid api");
    }
}

const watchData = async (req,res)=>{
    try{
        let laptop = await watchModel.find({});
        res.status(200).send(laptop);
    }catch(e){
        res.status(401).send("Invalid api");
    }
}

const applianceData = async (req,res)=>{
    try{
        let laptop = await applianceModel.find({});
        res.status(200).send(laptop);
    }catch(e){
        res.status(401).send("Invalid api");
    }
}

const soundbarData = async (req,res)=>{
    try{
        let laptop = await soundbarModel.find({});
        res.status(200).send(laptop);
    }catch(e){
        res.status(401).send("Invalid api");
    }
}

const televisionData = async (req,res)=>{
    try{
        let laptop = await telivisionModel.find({});
        res.status(200).send(laptop);
    }catch(e){
        res.status(401).send("Invalid api");
    }
}
module.exports = {watchData, laptopData, applianceData, soundbarData, televisionData}