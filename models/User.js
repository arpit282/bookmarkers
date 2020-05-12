const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    sitename:{
        type:String,
        required:true
    },
    siteurl:{
        type:String,
        required:true
    },
    tag1:{
        type:String,
        required:true
    },
    tag2:{
        type:String,
        required:true
    },
    tag3:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model("User",userschema)

module.exports = User