const express=require('express')
const router=express.Router()
const {registerUser,loginUser,getME}=require('../controller/userController')
router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/me',getME)

  




module.exports=router