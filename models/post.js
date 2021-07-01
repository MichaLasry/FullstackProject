const mongoose = require("mongoose")

const Post = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
    },
    post:{type:mongoose.Schema.Types.ObjectId,ref:'magazine'},
})
module.exports = mongoose.model('post',Post)