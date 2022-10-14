const User = require("../models/userModel")
const jwt = require("jsonwebtoken")


exports.isAuthenticatedUser = async (req, res, next) => {
   try{
    const { token } = req.cookies;
    if (!token) {
      return res.status(500).json("Please Login to access this resource");
    }
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  
    req.user = await User.findById(decodedData.id);
  
    next();
   }catch(error){
    res.status(500).json(error)
   }
  }