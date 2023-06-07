const mongoose=require('mongoose')

const rateSchema=mongoose.Schema({
    userId:{
        type:Number,
        required:true
    },
    restuarantId:{
        type:Number,
        required:true
    },
    rate:{
        type:Number,
        required:true
    }
})

const  Rate= mongoose.model('Rate', rateSchema)
module.exports=Rate