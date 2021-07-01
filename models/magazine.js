const mongoose = require("mongoose")
// const post = require('./post')
const Magazine = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
    },
    user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    posts:[{type:mongoose.Schema.Types.ObjectId,ref:'post'}]
})
module.exports = mongoose.model('magazine',Magazine)
