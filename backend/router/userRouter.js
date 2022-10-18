const express = require("express")
const { registerUser, loginUser, logoutUser, getUserDetails } = require("../controller/userController")
const { isAuthenticatedUser } = require("../middleware/auth")

const router = express.Router()

router.route("/books/user/register").post(registerUser)
router.route("/books/user/login").post(loginUser)
router.route("/books/logout").get(logoutUser)
router.route("/books/user-details").get(isAuthenticatedUser,getUserDetails)



module.exports = router