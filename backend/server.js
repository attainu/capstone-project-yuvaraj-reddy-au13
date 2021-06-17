const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')

const asyncHandler = require('express-async-handler');


const notFound = require('./middleware/errorMiddleware')
const errorHandler = require('./middleware/errorMiddleware')

const products = require('./data/products.js');
const connectDB = require('./config/db.js')

// const productRoutes = require('./routes/productRoutes')
// const product1Route = require('./routes/product1Route')

// const Product = require('./models/productModel')

const app = express();
const PORT = 5000;

dotenv.config();
connectDB();

app.get('/', (req, res)=>{
    res.send('Working fine');
})

app.get('/api/products', (req, res)=>{
    // const product = products.find({})
    res.json(products)
    // console.log(product)
})

app.get('/api/products/:id', (req, res)=>{
    const product = products.find((p) => p.id === req.params.id)
    // res.json(products.id === req.params.id)
    res.json(product)
})


// app.use('/api/products', productRoutes);


app.use(notFound);
app.use(errorHandler);

app.use(cors())


app.listen(PORT, ()=>{
    console.log(`server is Running on ${process.env.NODE_ENV}  - http://localhost:${PORT}`)
})