const express = require('express');
const router = express.Router();

const Product = require('../models/productModel');

const asyncHandler = require('express-async-handler');




router.get('/',asyncHandler(async (req, res) =>{
    // const product = Product.find((p) => p._id === req.params.id)
    // // const product = products.find((p) => p._id === req.params.id)
    // res.json(product)
    
    // try {
    // const product =await Product.findById(req.params.id)
    // res.json(product)
        
    // } catch (error) {
    //     console.error(error)
    //     res.status(404).json({message : "Product Not Found"})
        
    // }

    const product = await Product.findById( req.params.id )
    // const product =await Product.findById( '60c2e68345134f0fbcd2540e' )
    // console.log(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404).json({message : "Product Not Found"})
    }

    // res.json(product)
    
}))


module.exports = router;