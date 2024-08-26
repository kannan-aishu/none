 const mongoose = require('mongoose');

 const productschema = new mongoose.Schema({
    name:String,
    price: String,
    description: String,
    retings:String,
    images :[
        {
            image: String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numofreviews:String,
    create_dat:Date
 });
 const productmodel = mongoose.model('product',productschema);
 module.exports = productmodel;