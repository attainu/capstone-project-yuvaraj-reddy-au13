import asyncHandler from 'express-async-handler'
import Product from '../model/productModel.js'

const getProduct = asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.send(products)
})

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    }
    else {
        res.status(404)
    }

})

export {
    getProduct,
    getProductById
}