const express=require("express")
const router=express.Router()
const {getGoals,postGoals,putGoals,deleteGoals}=require('../controller/goalController')
router.get('/get',getGoals)

router.post('/post',postGoals)

router.put('/put/:id',putGoals)

router.delete('/delete/:id',deleteGoals)



module.exports=router