const mongoose = require('mongoose')


const appSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Username blank mat rakh yaar']
    },
    age: {
        type: Number,
        required: [true, 'Password blank mat rakh yaar'],
    },
    email: {
        type: String,
        required: [true, 'Password blank mat rakh yaar'],
    },
    dob: {
        type: String,
        required: [true, 'Password blank mat rakh yaar'],
    },
    rollno: {
        type: Number,
        required: [true, 'Password blank mat rakh yaar'],
    },
    seatno: {
        type: Number,
        required: [true, 'Password blank mat rakh yaar'],
    },
    profileimage: {
        type: String,
    }



})

module.exports = mongoose.model('Application', appSchema);
