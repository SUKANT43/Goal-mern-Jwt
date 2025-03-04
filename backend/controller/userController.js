const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const User=require('../model/userModel')
const registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        if(!name || !email ||!password){
           return res.status(200).json({msg:"enter all data"})
        }
        const checkUser = await User.findOne({ email });
        if (checkUser) {
          return res.status(400).json({ msg: "User already exists" });
        }
    
        else{
            const salt=await bcrypt.genSalt(10)
            const hashPass=await bcrypt.hash(password,salt)

            const user=await User.create({
                name,
                email,
                password:hashPass
            })

            return res.status(200).json(user)
        }
        
    }
    catch(err){
        res.status(400).json(err)
    }
}

const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
      }
  
      const checkUser = await User.findOne({ email });
      if (!checkUser) {
        return res.status(400).json({ msg: "User not found" });
      }
  
      const userPassword = await bcrypt.compare(password, checkUser.password);
      if (!userPassword) {
        return res.status(400).json({ msg: "Enter correct password" });
      }
  
      return res.status(200).json({ id:checkUser.id,name:checkUser.name,email:checkUser.email,token:generateJWT(checkUser.id)});
    } catch (err) {
      res.status(500).json({ msg:err });
    }
  };
  
  const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
  };
  


const getME=async(req,res)=>{
    try{
        const {id,name,email}=await User.findById(req.user.id)
        res.status(200).json({
            _id:id,
            name,
            email
        })
    }
    catch(err){
        res.status(400).json(err)
    }
}





module.exports={registerUser,loginUser,getME}
