const express=require('express')
const router=express.Router

const Rate= require('../models/RateModel')

router.post('/rate',(req,res)=>{
    const {userId, restaurantId, rate}=req.body

    const newRate= new Rate({
        userId,
        restaurantId,
        rate
    })
})

newRate.save()
.then(savedRate=>{
    res.status(201).json(savedRate).send({message: "Thank you for rating us"})
    console.log('Rate saved')
})
.catch(error => {
    console.error(error);
    res.status(500).json({ error: 'Failed to rate restaurant' });
  });