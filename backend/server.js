const express=require("express")
const cors=require('cors')
const dotenv=require("dotenv").config()
const port=process.env.PORT||2008;
const router=require('./routes/goalRoutes')
const app=express()
const connectDB=require('./config/db')
app.use(cors())

app.use(express.json())

app.use('/api',router)


app.listen(port,()=>{
    console.log("Port is running in:"+port);
    connectDB()
})