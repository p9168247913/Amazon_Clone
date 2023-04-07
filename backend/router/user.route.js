const express = require("express")
const jwt= require("jsonwebtoken")
const bcrypt = require("bcrypt")
const UserModel=require("../models/user.model")

const userRouter=express.Router()

userRouter.post("/register", async(req,res)=>{
    const {name, email, gender, password, age, city, is_married} = req.body
    console.log(req.body)
    try{
        bcrypt.hash(password, 5, async(err, hash) =>{
            if(err){
                console.log(err)
            }else{
                let ExistingUser = await UserModel.findOne({email:email})
                if(ExistingUser){
                    res.send({msg:"User Already Exist, Try Login"})
                }else{
                    let newUser= new UserModel({name, email, gender, password:hash, age, city, is_married})
                    await newUser.save();
                    res.send({msg:"New User Added", user:newUser})
                }
            }
        })
    }catch(e){
        console.log(e)
        res.send(`Registration Error: - ${e}`)
    }
})
userRouter.post("/login", async(req,res)=>{
    const {email, password} = req.body
    try{
        let User=await UserModel.find({email:email})
        if(User.length>0){
            bcrypt.compare(password, User[0].password, (err, result) =>{
                if(result){
                    let token =jwt.sign({userId:User[0]._id}, process.env.key);
                    res.send({msg:`Login Success ! WelcomeBack ${User[0].name}`, token:token});
                }else{
                    res.send({msg:"Wrong Password"})
                }
            })
        }else{
            res.send({msg:`Email ${email} does not Exist. Try Registring`})
        }
    }catch(e){
        res.send({msg:"Error", reason:e})
    }
})

module.exports=userRouter