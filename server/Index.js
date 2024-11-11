const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
app.use(cors())
const userRouter = require('./Router/userrouter')
const productRouter = require('./Router/productRouter')
const authRouter = require('./Router/authRouter')
const demoRouter = require('./Router/demoRouter')




mongoose.connect(process.env.MONGOVALUE).then(()=>{
    console.log("database connected")}).catch((err)=>{console.log(err.message)})

    app.use(express.json())
    app.use('/user',userRouter)
    app.use('/authentication',authRouter)
    app.use('/product',productRouter)
    app.use('/api',demoRouter)

    


app.listen(3000, ()=>{
    console.log("port is connected");
})


