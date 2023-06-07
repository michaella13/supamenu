require('dotenv').config()
const user= require('./controllers/UserController')
const resto =require('./controllers/RestaurantController')
const connection=require('./utils/db')

const bodyParser=require('body-parser')
const express=require('express')
const app=express()

connection()

const cors=require('cors')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.use('/', user)
app.use('/api', resto)



const port=process.env.port
app.listen(port, ()=> console.log(`listening on port ${port}`))



