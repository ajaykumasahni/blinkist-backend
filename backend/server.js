const app = require("./app")
const dotenv = require("dotenv")
const database = require("./config/database")

dotenv.config({path: "backend/config/.env"})
database()

app.get("/", (req,res) => {
    console.log("hello world")
    res.send("welcome")
})


// Debugging
app.listen(process.env.PORT, () => {
    console.log(`server is connected to localhost:${process.env.PORT}`)
})