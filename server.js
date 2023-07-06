const express=require('express')
const connectDB=require('./config/connectDB')
require ('dotenv').config


const app=express()
app.use(express.json())
connectDB()
const port=process.env.PORT || 4000
app.use('/userAPI',require('./routes/userRoutes'))

app.listen(port,(err)=>err?console.log(err):console.log(`server up on ${port}`))
