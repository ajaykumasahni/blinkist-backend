const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    bookCategory: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    user: [
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

module.exports = new mongoose.model("Book", bookSchema)