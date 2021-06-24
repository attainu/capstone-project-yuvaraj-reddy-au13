import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../model/userModel.js'

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    const userExist= await User.findOne({email})
    if (userExist) {
        res.status(400)
        throw new Error("User already exist")
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            token : generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid data")
    }
    
})

const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user= await User.findOne({email})
    
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            token : generateToken(user._id)
            })
    }
    else{
        res.send("invalid")
    }
})

const getUserProfile = asyncHandler(async (req, res) => {
   const user= await User.findById(req.user._id)
    if (user) {
        
    } else {
        res.status(404)
        throw new Error("user not found")
    }
})

export {
    authUser,
    registerUser,
    getUserProfile
}