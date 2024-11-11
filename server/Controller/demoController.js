const demo = require('../model/demomodel')



const insertData = async(req,res)=>{
    console.log(req.body);
    try{
        const insertedData= await demo.create(req.body)
        res.status(200).json({message:insertedData})
    }catch(err){
        res.status(500).json(err.message)
    }
}



const demoData = async(req,res)=>{
    
    try{
        console.log(req.body)
        const items = await demo.find({age:{$gt:30}})

        res.status(200).json(items)

    }catch(err){
        res.status(500).json(err)
    }

}

const demoEyeColor = async(req,res)=>{
    try{
        const itemOne = await demo.find({age:{$gte:30},eyeColor:"green"})
        res.status(200).json(itemOne)
    }catch(err){
        res.status(500).json(err)
    }
}
const demoAge = async(req,res)=>{
    try{
        const itemTwo = await demo.find({age:{$lte:30},eyeColor:"brown"})
        res.status(200).json(itemTwo)
    }catch(err){
        res.status(500).json(err)
    }
}

const demoUpdate = async(req,res)=>{
    try{
        const updated = await demo.updateOne({'company.email':'aureliagonzales@yurture.com'},{$set:{'company.title':'Futura Labs'}})
        res.status(200).json(updated)
    }catch(err){
        res.status(500).json(err)
    }
}
const demoDelete = async(req,res)=>{
    try{
        const deleted = await demo.deleteOne({index:27})
        res.status(200).json(deleted)
    }catch(err){
        res.status(500).json(err)
    }
}
module.exports = {insertData, demoData,demoEyeColor,demoAge,demoUpdate,demoDelete}