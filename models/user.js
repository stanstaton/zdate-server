let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 1
    },
    skills: Array,
    photo: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    stats: Array
})


module.exports = mongoose.model('User', userSchema)