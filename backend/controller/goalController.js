const Goal=require('../model/goalModel')

const getGoals=async(req,res)=>{
    try{
    const goals=await Goal.find()
    res.status(200).json({goals})
    }
    catch(err){
        res.status(400).json(err)
    }
}

const postGoals=async(req,res)=>{
    try{
        const goals=await Goal.create({
            text:req.body.text
        })
        res.status(200).json({msg:"goal added"})
        }
        catch(err){
            res.status(400).json(err)
        }
}

const putGoals=async(req,res)=>{
    try{
        const goal=await Goal.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        if(!goal){
            res.status(200).json({msg:"there is no data for this id"})
        }
        res.status(200).json(goal)
    }
    catch(err){
        res.status(400).json(err)
    }
}

const deleteGoals=async(req,res)=>{
    try{
        const goal=await Goal.findByIdAndDelete(req.params.id)
        if(!goal){
            res.status(200).json({msg:"there is no data for this id"})
        }else{
            res.status(200).json({msg:"data deleted"})
        }
    }
    catch(err){
        res.status(400).json(err)
    }
}


module.exports={getGoals,postGoals,putGoals,deleteGoals}