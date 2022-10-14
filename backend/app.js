const express = require("express")

const app = express()
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")

app.use(express.json()) //this is use connect with postman
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

const bookRouter = require("./router/bookRouter")
const userRouter = require("./router/userRouter")

app.use("/api/v1",bookRouter)
app.use("/api/v1", userRouter)


module.exports = app