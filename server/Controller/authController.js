const user = require('../model/usermodel')
const argon = require('argon2')
const token = require('jsonwebtoken')
const loginData = async(req,res)=>{
    console.log("1111111",req.body)
    try{
        const findUser=await user.findOne({email:req.body.email})
        console.log(findUser);
        if(!findUser){
            return res.status(401).json("email is not found")
        }
        console.log(findUser);

        if (await argon.verify(findUser.password, req.body.password)) {
            const tokenGenerate = token.sign({id:findUser._id},process.env.jwtsecretkey,{expiresIn:"1d"})
            return res.status(200).json({token: tokenGenerate , userid:findUser._id , message:"login success"})

            // password match
          } else {
            return res.status(401).json("password and email did not match")
            // password did not match
          } 

    }catch(err){
        return res.status(500).json(err)

    }
}
module.exports = loginData
