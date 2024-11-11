const user = require("../model/usermodel")
const argon2 = require('argon2')

const postedDatas = async(req,res)=>{
    console.log("third check",req.body);
    
    req.body.password = await argon2.hash(req.body.password);

    try{
        const mongoData = await user.create(req.body)
        console.log("finalcheck",mongoData);
        return res.status(200).json({response: "signup success"})
    }catch(err){
        return res.status(500).json(err.message)
    }
}

const getDatafromDatabase = async(req,res)=>{
    try{
        const getdata = await user.find()
        res.status(200).json(getdata)
    }catch(err){
        res.status(500).json(err)
    }
}

const getsingleData =async(req,res)=>{
    console.log("three")
    try{
        const singleData = await user.findById(req.params.id)
        res.status(200).json(singleData)
    }catch(err){
        res.status(500).json(err)
    }
}

const getsingleDatabyquery = async(req,res)=>{
    console.log(req.query);
    try{
        const queryData = await user.find({place:req.query.place})
        res.status(200).json({message:queryData})
    }catch(err){
        res.status(500).json(err)
    }
}

const deleteData = async(req,res)=>{
    try{
        
         await user.deleteOne({username:req.query.name})
         res.status(200).json({message:"deleted"})
    }catch(err){
        res.status(500).json(err)
    }
}

const updateDatabase = async(req,res)=>{
    console.log(req.body)
    console.log(req.query.name)
    try{
        const updatedInfo = await user.updateOne({username:req.query.name},{$set:req.body},{new:true})
        res.status(200).json({message:updatedInfo})
    }catch(err){
        res.status(500).json(err)
    }

}



module.exports = {postedDatas,getDatafromDatabase,getsingleData,getsingleDatabyquery,deleteData,updateDatabase}