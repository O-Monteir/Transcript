const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {
        type: String,

    },
    password: {
        type: String,

    },
    email: {
        type: String,

    },
    rollno: {
        type: Number,

    }


})

module.exports = mongoose.model('Registration', userSchema);
