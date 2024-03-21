const mongoose = require("mongoose");

module.exports.connectDB = async() => {  
    const {connection}=await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo is Connected with ${connection.host}`);
}


