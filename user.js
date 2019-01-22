const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create a schema for User

let userSchema = new Schema ( {
    'name': String,
    'movies': [{type: Schema.Types.ObjectId, ref:'Movie'}]
});

module.exports = db.model('User', userSchema);