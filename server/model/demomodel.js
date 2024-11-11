const mongoose = require('mongoose')
const demoSchema = new mongoose.Schema({
    index:Number,
    name:String,
    isActive:Boolean,
    registered:Date,
    age:Number,
    gender:String,
    eyeColor:String,
    favoriteFruit:String,
    company:{
        title:String,
        email:String,
        phone:String,
        location:{
            country:String,
            address:String
        }
    },
    tags:[String],
},{timestamps:true}
)

module.exports = mongoose.model('democollecton',demoSchema)