const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productname:String,
    price:String,
    modelnumber:String,
    color:String,
    status:Boolean
},{timestamps:true}
)

module.exports = mongoose.model('productcollection',productSchema)