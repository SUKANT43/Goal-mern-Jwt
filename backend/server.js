const express=require("express")
const cors=require('cors')
const dotenv=require("dotenv").config()
const port=process.env.PORT||2008;
const goalRouter=require('./routes/goalRoutes')
const app=express()
const connectDB=require('./config/db')
const userRouter=require('./routes/userRoutes')
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});


app.use(cors())

app.use(express.json())

app.use('/api/goal',goalRouter) 
app.use('/api/user',userRouter)



app.listen(port,()=>{
    console.log("Port is running in:"+port);
    connectDB()
})