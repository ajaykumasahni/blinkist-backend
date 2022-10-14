const User = require("../models/userModel")
const sendToken = require("../utils/jwtToken")


exports.registerUser = async(req,res) => {
    try{
        const {username, email,password} = req.body

        const user = await User.create({
            username, email,password
        })

        console.log("hello")

        sendToken(user, 201, res);

    }catch(error){
        res.status(500).json(error.message)
    }
}

exports.loginUser = async (req, res, next) => {
   try{
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(401).json("Please Enter Email & Password");
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    console.log("hello world")
    if (!user) {
      return res.status(500).json("Invalid email or password");
    }
    console.log("hello world")
    const isPasswordMatched = await user.comparePassword(password);
    console.log("hello world")
  
    if (!isPasswordMatched) {
      return res.status(401).json("Invalid email or password");
    }
    console.log("hello world")
  
    sendToken(user, 200, res);
   }catch(error){
    res.status(500).json(error.message)
   }
}

exports.getUserDetails = async(req,res) => {
    try{
        const user = await User.findById(req.user._id)
        res.status(200).json({
            success: true,
            user
        })
    }catch(error){
        res.status(500).json(error)
    }
}

exports.logoutUser = async(req,res) => {
    try{
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        })

        res.status(200).json({
            success: true,
            message: "You are logged out"
        })
    }catch(error){
        res.status(500).json(error)
    }
}

