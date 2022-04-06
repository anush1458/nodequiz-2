const mongoose = require('mongoose')

const question = new mongoose.Schema(
    {
        question :{
            type:String,
            unique:true,
        }
    }
)

module.exports = mongoose.model("question" , question)

