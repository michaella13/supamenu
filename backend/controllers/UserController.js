const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')
const User = require('../models/UserModel')


const express= require('express')
const router=express.Router()

router.post('/signup', async (req,res)=>{
    
    try {
        const { fullNames, phoneNumber, email, password } = req.body;
        console.log(fullNames)
        

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: 'User already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({
            fullNames,
            phoneNumber,
            email,
            password: hashedPassword
        })

        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json(error);
        console.log(error )
    }

})

router.post('/login', async (req, res)=>{
    try{
        const {email,password}=req.body
        const user= await User.findOne({email})

        if(!user){
            return res.json({ message: 'Invalid credentials' });
        }
        const  passwordMatch= await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.json({ message: 'Invalid credentials' });
        }

        const token= jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY,{
            expiresIn:'1h'
        })

        res.header('Authorization', `Bearer ${token}`).json({message:"Login Successful",token: `Bearer ${token}`}).status(200)

    }
    catch(err){
        res.status(500).json({err: 'An error occured'})
    }

})

module.exports = router;