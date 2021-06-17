const express = require('express');
const router = express.Router();

// const Product = require('../models/productModel');

const asyncHandler = require('express-async-handler');

const Product = require('../data/products')





router.get('/', asyncHandler(async(req, res) =>{
    // try {
    //     const products =await Product.find({})

    //     res.json(products)
    //     // console.log(products)
    // } catch (error) {
    //     console.error(error)
    // }

        const products =await Product.find({})
        res.json(products)
        
        // console.log(req)

    // res.json(products)
}))
router.get('/:id',asyncHandler(async (req, res) =>{
    // const product = Product.find((p) => p.id === req.params.id)
    // const product = products.find((p) => p._id === req.params.id)
    // res.json(product)
    
    // try {
    // const product =await Product.findById(req.params.id)
    // res.json(product)
        
    // } catch (error) {
    //     console.error(error)
    //     res.status(404).json({message : "Product Not Found"})
        
    // }

    // const product =await Product.find({"_id" : req.params.id})
        // res.json(product)

    const product = await Product.findById( req.params.id )
    // const product =await Product.findById( '60c32ff49236d34a30c4f60b' )
    // console.log("reqparams from product route : ",req.params.id)
    if(product){
        res.json(product)
        // console.log(product)
    }else{
        res.status(404).json({message : "Product Not Found"})
        console.log("Product Not Found")
    }

    // res.json(product)
    
}))


module.exports = router;