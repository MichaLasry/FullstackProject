const mongoose = require("mongoose")
const POST = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
    },
    post:{type:mongoose.Schema.Types.ObjectId,ref:'post'},
})
module.exports = mongoose.model('post',POST)