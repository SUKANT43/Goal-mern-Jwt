const getGoals=(req,res)=>{
    res.json({mes:"hi"})
}

const postGoals=(req,res)=>{
    res.json({mes:"hi"})
}

const putGoals=(req,res)=>{
    res.json({mes:"hi"+req.params.id})
}

const deleteGoals=(req,res)=>{
    res.json({mes:"hi"+req.params.id})
}


module.exports={getGoals,postGoals,putGoals,deleteGoals}