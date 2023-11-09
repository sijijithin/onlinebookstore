const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
      
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
  
    password:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
       
    },
   
})

const users = new mongoose.model("users", userSchema)

module.exports = users