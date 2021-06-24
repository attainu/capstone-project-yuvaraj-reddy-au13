import mongoose from 'mongoose'
import dotenv from 'dotenv'
import user from './data/users.js'
import products from './data/product.js'
import User from './model/userModel.js'
import Product from './model/productModel.js'
import Order from './model/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () =>{
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        const createdUser = await User.insertMany(user)

        const adminUser = createdUser[0]._id

        const sampleProduct = products.map(product =>{
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProduct)

        console.log("data imported")
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1) 
    }
}

const destroyData = async () =>{
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        console.log("data destroyed")
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1) 
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}