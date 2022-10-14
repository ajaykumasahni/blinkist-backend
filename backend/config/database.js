const mongoose = require("mongoose")

const database = () => {
    mongoose.connect("mongodb://localhost:27017/book", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to database")
    }).catch((error) => {
        console.log(error)
    })
}
module.exports = database