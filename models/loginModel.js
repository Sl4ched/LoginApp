const mongoose = require('mongoose')
const schema = mongoose.Schema


const loginSchema = new schema({

    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },

},{timestamps:true})

module.exports = mongoose.model('Login',loginSchema)