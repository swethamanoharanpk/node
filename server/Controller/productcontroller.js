const product = require('../model/productmodel')
const productInfo = async(req,res)=>{
    console.log(req.body);
    try{
        const mongoproductdata= await product.create(req.body)
        res.status(200).json({message:mongoproductdata})
    }catch(err){
        res.status(500).json(err.message)
    }
}


module.exports = productInfo