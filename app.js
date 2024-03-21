//app.js

const express = require('express');
const { config } = require("dotenv");
const paymentRoute = require("./routes/paymentRouter.js");
const cors = require("cors");

config({ path: "./config/.env" });
const app = express();


// Allow requests from http://localhost:3000
app.use(cors({
   origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute);

app.get("/api/getkey", (req,res) =>{
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
   res.status(200).json({key:process.env.RAZORPAY_API_KEY})
});


module.exports =app;





