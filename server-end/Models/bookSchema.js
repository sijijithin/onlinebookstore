const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
      
    },
    author: {
        type: String,
        required: true,
    },
  
    category:{
        type: String,
        required: true,
    },
    publishedyear:{
        type: String,
        required: true,
    },
  
})

const books = new mongoose.model("books", bookSchema)

module.exports = books