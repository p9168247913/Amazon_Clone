require("dotenv").config();
const express = require("express");
const cors = require('cors');
const connection = require("./config/db");
const laptopRouter = require("./router/laptop.route");
const watchRouter = require("./router/watch.route");
const applianceRouter = require("./router/appliance.route");
const soundRouter = require("./router/soundbar.route");
const telivisionRouter = require("./router/telivision.route");
const cartRouter = require("./router/cart.route");
const { auth } = require("./middlewares/auth");
const orderRouter = require("./router/order.route");
const userRouter = require("./router/user.route");


const app =  express();
app.use(cors({origin:"*"}))
app.use(express.json());

app.use(express.urlencoded({extended:true}))
app.use("/user", userRouter)
app.use("/laptop", laptopRouter)
app.use("/watch", watchRouter)
app.use("/appliance", applianceRouter)
app.use("/soundbar", soundRouter)
app.use("/telivision", telivisionRouter)


app.use(auth)
app.use("/cart" ,cartRouter)
app.use('/order', orderRouter)


app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to Mongo Atlas");
  } catch (err) {
    console.log(err)
    console.log("Couldn't connect to Mongo Atlas");
  }
  console.log(`Server started on port ${process.env.port}`);
});
