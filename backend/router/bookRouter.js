const express = require("express")
const { createBook, getAllBook, getSingleBook, updateBook, savedPost, unSavedPost, getAllBooks } = require("../controller/bookController")
const { isAuthenticatedUser } = require("../middleware/auth")

const router = express.Router()


router.route("/create/book").post(isAuthenticatedUser,createBook)
router.route("/books").get(isAuthenticatedUser,getAllBooks)
router.route("/books/:key").get(isAuthenticatedUser,getAllBook)
router.route("/single/:id").get(isAuthenticatedUser,getSingleBook)
router.route("/update/:id").put(isAuthenticatedUser,updateBook)
router.route("/saved/:id").patch(isAuthenticatedUser,savedPost)
router.route("/unsave/:id").patch(isAuthenticatedUser,unSavedPost)

module.exports = router