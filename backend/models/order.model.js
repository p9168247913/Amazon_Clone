const mongoose = require("mongoose");
const date = new Date().toString().split(" ");
let str = "";
for (let i = 0; i < date.length - 4; i++) {
  str += date[i] + " ";
}

const OrderSchema = mongoose.Schema(
  {
    id: Number,
    imglink: String,
    name: String,
    details: String,
    MRP: Number,
    MRPx: String,
    brand: String,
    video: String,
    img1: String,    
    img2: String,
    img3: String,    
    dimension: String,
    weight: String,
    purity: String,
    diamondtype: String,
    settingtype: String,
    totalnum: String,
    totalweight: String,
    order:{type:String , default:"placed"},
    userId: { type: mongoose.Schema.ObjectId, ref: "user" },
    time:{type:String ,default:str}, 
  }
);

const OrderModel = mongoose.model("order", OrderSchema);

module.exports =  OrderModel ;