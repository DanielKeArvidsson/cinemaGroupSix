const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create a schema for the big theater

let theaterSchema = new Schema ( {
    'name': String,
    'movies': [{type: Schema.Types.ObjectId, ref:'Movie'}],
    'seats': [{type: Schema.Types.ObjectId, ref:'Seat'}]
});

module.exports = db.model('Theater', theaterSchema);