const mongoose = require("mongoose")
const Post = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
    },
    magazine:{type:mongoose.Schema.Types.ObjectId,ref:'post'},
})
module.exports = mongoose.model('post',Post)