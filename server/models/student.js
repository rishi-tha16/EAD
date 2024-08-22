const mongoose = require('mongoose')
 const studentSchema = new mongoose.Schema
 ({
    name: 
    {
        type: String,
        required: true
    },
    tech: 
    
    {
        type: String,
        required: true
    },
    sub: 
   {
        type: String,
        required: true,
       
    },
    rollno:
    {
        type:Number,
        required:true,
    },
    college:
    {
        type:String,
        required:true,
    }
 })
 module.exports = mongoose.model('Student',studentSchema)