//server.js

const app  = require("./app.js");
const RAZORPAY = require('razorpay');
const { connectDB } = require("./config/database.js");

connectDB();

const instance = new RAZORPAY({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.locals.instance = instance;

app.listen(process.env.PORT, () =>
  console.log(`Server is running on ${process.env.PORT}`)
);



// module.exports = { instance };



