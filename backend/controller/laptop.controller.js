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

const televisionDelete = async(req, res)=>{
    try{
        let exists = await telivisionModel.findOneAndDelete({
            id: req.params.id,
        })
        console.log(exists, req.params.id, req.body.name);
  
        res.status(200).send("Product deleted successfully");
    }catch(e){
        console.log(e)
    }
}

const laptopDelete = async(req, res)=>{
    try{
        let exists = await laptopModel.findOneAndDelete({
            id: req.params.id,
        })
        console.log(exists, req.params.id, req.body.name);
  
        res.status(200).send("Product deleted successfully");
    }catch(e){
        console.log(e)
    }
}
const applianceDelete = async(req, res)=>{
    try{
        let exists = await applianceModel.findOneAndDelete({
            id: req.params.id,
        })
        console.log(exists, req.params.id, req.body.name);
  
        res.status(200).send("Product deleted successfully");
    }catch(e){
        console.log(e)
    }
}
const watchDelete = async(req, res)=>{
    try{
        let exists = await watchModel.findOneAndDelete({
            id: req.params.id,
        })
        console.log(exists, req.params.id, req.body.name);
  
        res.status(200).send("Product deleted successfully");
    }catch(e){
        console.log(e)
    }
}
const soundbarDelete = async(req, res)=>{
    try{
        let exists = await soundbarModel.findOneAndDelete({
            id: req.params.id,
        })
        console.log(exists, req.params.id, req.body.name);
  
        res.status(200).send("Product deleted successfully");
    }catch(e){
        console.log(e)
    }
}
// app.delete("/", async (req, res) => {
//     try {
//       let exists = await Electronic.findOneAndDelete({
//         id: req.body.id,
//         name: req.body.name,
//       });
//       console.log(exists, req.body.id, req.body.name);
  
//       res.status(200).send("Product deleted successfully");
//     } catch (e) {
//       res.send(e.massage);
//     }
//   });
module.exports = {watchData, laptopData, applianceData, soundbarData, televisionData, televisionDelete, laptopDelete, applianceDelete, soundbarDelete, watchDelete}