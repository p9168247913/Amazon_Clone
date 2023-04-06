const laptopModel = require("../schema/laptops.model")
const applianceModel = require("../schema/appliance.model");
const soundbarModel = require("../schema/soundbar.model");
const telivisionModel = require("../schema/telivision.model");

// const UserModel = require("../schema/user.model");
const watchModel = require("../schema/watch.model");


const laptopPostData = async (req, res) => {
    try {
      const { id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3,} = req.body;
      let laptop =  new laptopModel({id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3});
      await laptop.save();
      res.status(200).send(laptop);
    } catch (e) {
      res.status(401).send("Invalid api");
    }
  };
  
  const watchPostData = async (req, res) => {
    try {
      const { id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3,} = req.body;
      let watch =  new watchModel({id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3});
     await watch.save();
      res.status(200).send(watch);
    } catch (e) {
      res.status(401).send("Invalid api");
    }
  };
  const soundbarPostData = async (req, res) => {
    try {
      const { id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3,} = req.body;
      let sound =  new soundbarModel({id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3});
     await sound.save();
      res.status(200).send(sound);
    } catch (e) {
      res.status(401).send("Invalid api");
    }
  };
  const appliancePostData = async (req, res) => {
    try {
      const { id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3,} = req.body;
      let appliance =  new applianceModel({id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3});
     await appliance.save();
      res.status(200).send(appliance);
    } catch (e) {
      res.status(401).send("Invalid api");
    }
  };
 const telivisionPostData = async (req, res) => {
    try {
      const { id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3} = req.body;
      let telivision =  new telivisionModel({id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3});
       
     await telivision.save();
      res.status(200).send(telivision);
      console.log(television)
    } catch (e) {
      res.status(e).send("Invalid api");
    }
  };

  const televisionPatch =async(req,res)=>{
    try{
      const product = await telivisionModel.findByIdAndUpdate(req.params, req.body,{new:true})
      res.status(200).send(product)
    }catch(e){
      console.log(e)
      res.status(500).send(e.message)
    }
  }

  const appliancePatch =async(req,res)=>{
    try{
      const product = await applianceModel.findByIdAndUpdate(req.params, req.body,{new:true})
      res.status(200).send(product)
    }catch(e){
      console.log(e)
      res.status(500).send(e.message)
    }
  }
  const laptopPatch =async(req,res)=>{
    try{
      const product = await laptopModel.findByIdAndUpdate(req.params, req.body,{new:true})
      res.status(200).send(product)
    }catch(e){
      console.log(e)
      res.status(500).send(e.message)
    }
  }
  const soundbarPatch =async(req,res)=>{
    try{
      const product = await soundbarModel.findByIdAndUpdate(req.params, req.body,{new:true})
      res.status(200).send(product)
    }catch(e){
      console.log(e)
      res.status(500).send(e.message)
    }
  }

  const watchPatch =async(req,res)=>{
    try{
      const product = await watchModel.findByIdAndUpdate(req.params, req.body,{new:true})
      res.status(200).send(product)
    }catch(e){
      console.log(e)
      res.status(500).send(e.message)
    }
  }

  
  module.exports ={telivisionPostData, appliancePostData, soundbarPostData, watchPostData, laptopPostData, televisionPatch, laptopPatch, soundbarPatch, watchPatch, appliancePatch}

  