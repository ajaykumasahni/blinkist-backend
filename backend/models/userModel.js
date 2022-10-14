const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, "Please enter the password"],
        minLength: [6, "Password Should be more than 6 character"],
        select: false,
    },
    email: {
        type: String,
        required: [true, "Please Enter the valid email"],
        unique: true
    },
    saved: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.jwtToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };


module.exports = new mongoose.model("User", userSchema)