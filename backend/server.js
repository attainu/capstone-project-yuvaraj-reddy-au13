import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.get('/', (req,res)=>{
    res.send('Apis running..')
})

app.listen(PORT,()=>{
    console.log("server started at ", PORT);
})