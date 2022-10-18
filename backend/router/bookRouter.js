const express = require("express")
const { createBook, getAllBook, getSingleBook, updateBook, savedPost, unSavedPost, getAllBooks } = require("../controller/bookController")
const { isAuthenticatedUser } = require("../middleware/auth")

const router = express.Router()


router.route("/books").post(isAuthenticatedUser,createBook)
router.route("/books").get(isAuthenticatedUser,getAllBooks)
// router.route("/books/:key").get(isAuthenticatedUser,getAllBook)
router.route("/books/:id").get(isAuthenticatedUser,getSingleBook)
router.route("/books/:id").put(isAuthenticatedUser,updateBook)
router.route("/books/saved/:id").patch(isAuthenticatedUser,savedPost)
router.route("/books/unsave/:id").patch(isAuthenticatedUser,unSavedPost)

module.exports = router