const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:String,
    username:String,
    password:String,
    dob:String,
    mobile:Number
})

module.exports = mongoose.model('User',UserSchema);