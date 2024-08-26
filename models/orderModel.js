const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cartitems:Array,
    amount:String,
    status:String,
    createdat: Date
})
const orderModel = mongoose.model('oreder',orderSchema);
module.exports = orderModel;