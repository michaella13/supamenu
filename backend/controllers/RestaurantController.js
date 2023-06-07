const Restaurant=require('../models/RestaurantModel')
const express=require('express') 
const router=express.Router()

router.post('/restaurant', (req,res)=>{
    const {name, description, tableNumbers,appetizers,starters, mains,desserts, drinks}=req.body
    const newRestaurant= new Restaurant({
        name, description,tableNumbers, appetizers, starters, mains, desserts, drinks
    })
    newRestaurant.save()
    .then(savedRestaurant=>{
        res.status(201).json(savedRestaurant)
        console.log('restaurant saved')
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to register the restaurant' });
      });
})

router.get('/restaurants', (req,res)=>{
    const {name}=req.body
    Restaurant.find({ name: { $regex: name, $options: 'i' } })
    .then(restaurants => {
        res.status(200).json(restaurants); // Return the matching restaurants as a response
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to find restaurant with name '+ name });
      });
})

router.get('/restaurant/:id/drinks', (req,res)=>{
    const restoId=req.params.id
    

    Restaurant.findById(restoId)
    .then(restaurant =>{
        if(!restaurant){
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        console.log("consolingggggggg "+restaurant)
        const drinks=restaurant.drinks;
        
        res.status(200).json(drinks);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve drinks for the restaurant' });
      });
})
router.get('/restaurant/:id/appetizer', (req,res)=>{
    const restoId=req.params.id

    Restaurant.findById(restoId)
    .then(restaurant =>{
        if(!restaurant){
            return res.send(404).json({ error: 'Restaurant not found' });
        }
        const appetizers=restaurant.appetizers;
        res.status(200).json(appetizers);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve drinks for the restaurant' });
      });
})

module.exports = router;