const mongoose = require('mongoose')

const mealCourseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tableNumbers:[
        {
            type:Number,
            required:true
        }
    ],
    appetizers:[mealCourseSchema],
    starters: [mealCourseSchema],
    mains: [mealCourseSchema],
    desserts: [mealCourseSchema],
    drinks:[mealCourseSchema]
})
const Restaurant=mongoose.model('Restaurant',restaurantSchema)
module.exports=Restaurant
