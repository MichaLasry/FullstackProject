const mongoose = require("mongoose")
const User = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 10,
    }
    ,
    mail: {
        type: String,
    },
 
    magazines:[{type:mongoose.Schema.Types.ObjectId,ref:'magazine'}]
})
module.exports = mongoose.model('user',User)