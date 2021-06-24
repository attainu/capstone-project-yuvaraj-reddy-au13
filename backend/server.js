import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()
connectDB()

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Apis running..')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT,()=>{
    console.log("server started at", PORT);
})