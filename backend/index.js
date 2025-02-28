require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const app = express()

connectDB()


const port = process.env.PORT || 5555

app.use('/',(req,res)=>{
    res.send("Backend is running")
})

app.listen(port,()=>{
    console.log(`Server running on port number ${port}`)
})