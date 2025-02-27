const express=require("express")
const router=express.Router()
const {getGoals,postGoals,putGoals,deleteGoals}=require('../controller/goalController')
const {protect}=require('../middleware/userMiddleware')

router.get('/get',protect,getGoals)

router.post('/post',protect,postGoals)

router.put('/put/:id',protect,putGoals)

router.delete('/delete/:id',protect,deleteGoals)



module.exports=router