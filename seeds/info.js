const mongoose = require('mongoose');
const admininfo = require('./admininfo')
const bcrypt = require('bcrypt')
const Registration = require('../models/registration')

mongoose.connect('mongodb://localhost:27017/Transcripts', {
    useNewUrlParser: true,

    useUnifiedTopology: true,

});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Registration.deleteMany({});
    const password = "Bane";
    const hash = await bcrypt.hash(password, 12);
    const info = new Registration({
        username: "Vijaya",
        password: hash

    })
    await info.save();
}

seedDB().then(() => {
    mongoose.connection.close();
})


