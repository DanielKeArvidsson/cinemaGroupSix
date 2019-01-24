const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create a schema for User

let userSchema = new Schema({
    "name": String,
    "email": String,
    "password": String

});

module.exports = db.model('User', userSchema);