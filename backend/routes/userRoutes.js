const express=require('express')
const router=express.Router()
const {protect}=require('../middleware/userMiddleware')
const {registerUser,loginUser,getME}=require('../controller/userController')
router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getME)

  




module.exports=router