const mongoose=require("mongoose")

const goal=mongoose.Schema(
    {
       text:{
        type:String,
        required:[true,"Enter the text value"]
       }, 
    },
    {
        timeStamps:true
    }
)

module.exports=mongoose.model('goal',goal)