const express = require('express')
//const bodyParser=require('body-parser')
const mongoose = require('mongoose')
const cors=require('cors')
const url = "mongodb+srv://bhukyarishitha5:9849467101@ead.lzzl9.mongodb.net/?retryWrites=true&w=majority&appName=EAD"
//const url = "mongodb://127.0.0.1:27017/cbit"
const app = express()
mongoose.connect(url)   
const con = mongoose.connection
con.on('open', () => 
{
    console.log('connected...')
 })
 app.use(cors())
 //app.use(bodyParser.urlencoded({extended:true}))
 app.use(express.json())
 const studentRouter = require('./routes/students')
 app.use('/students',studentRouter)
 app.listen(9000, () => 
{
    console.log('Server started')
 })