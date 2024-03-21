const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    razorpay_order_id:{
        type: 'string',
        required: true,
    },
    razorpay_payment_id:{
        type: 'string',
        required: true,
    },
    razorpay_signature:{
        type: 'string',
        required: true,
    }
});


const payment = mongoose.model("Payment", paymentSchema);

module.exports = payment;