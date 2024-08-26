const Productmadel = require('../models/productmodel')




exports.getProducts = async (req,res,next)=>{

    const products = await Productmadel.find({});
    res.json({
        success: true,
        message: 'Products is working...!',
        products
    })
}
exports.getSingleProducts = async (req,res,next)=>{


    try{
        console.log(req.params.id,'ID')
   const product = await Productmadel.findById(req.params.id);
    res.json({
        success: true,
        message: 'Single Products is working...!',
        product
    })
    }
    catch(error){
        res.status(404).json({
            success:false,
            message:'not font id'
        })

    }

    
}
