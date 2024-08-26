const orderModel = require('../models/orderModel');
const productmodel = require('../models/productmodel');

exports.Postcreateoreder = async (req,res,next)=>{

    const cartitems = req.body;
    // const amount =Number(cartitems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed(2) 
    // const status ='pending';
    const oreder = await orderModel.create({cartitems})

    // cartitems.array.forEach(async(item) => {
    //     const product = await productmodel.findById(item.product._id) ;
    //     const stock = await product.stock - item.qty;
    //     await product.save();
    // });
    res.json({
        success: true,
        message:'Order is Working...!',
        oreder
    })
}