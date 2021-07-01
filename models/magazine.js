const mongoose = require("mongoose")
const magazine = mongoose.Schema({
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
module.exports = mongoose.model('magazine',magazine)