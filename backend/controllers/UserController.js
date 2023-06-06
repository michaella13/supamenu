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
            return res.status(400).json({ error: 'User already exists' })
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
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const  passwordMatch= await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token= jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY,{
            expiresIn:'1h'
        })

        res.status(200).json({ token });

    }
    catch(err){
        res.status(500).json({err: 'An error occured'})
    }

})

module.exports = router;