const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
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
    userId:String,
})

const CartModel = mongoose.model('cart', cartSchema);

module.exports = CartModel;