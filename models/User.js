const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create a schema for User

let userSchema = new Schema ( {
    "name": String,
    "movies": [{type: Schema.Types.ObjectId, ref:'Movie'}],
    "seats": [{type: Schema.Types.ObjectId, ref:'Seat'}],
    "email": String,
    "password": String

});

module.exports = db.model('User', userSchema);