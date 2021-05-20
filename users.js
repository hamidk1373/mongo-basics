const mongoose = require("mongoose")

const {Schema, model} = mongoose;

const UserSchema = Schema({
    name: String,
    email: String
})


const User = model('user', UserSchema)


module.exports = User