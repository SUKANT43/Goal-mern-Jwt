const express=require("express")
const dotenv=require("dotenv").config()
const port=process.env.PORT||2008;
const router=require('./routes/goalRoutes')
const app=express()
app.use(express.json())
app.use('/api',router)


app.listen(port,()=>{
    console.log("Port is running in:"+port);
    
})