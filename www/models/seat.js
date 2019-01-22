const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for seat

let seatSchema = new Schema({
    "user": {type: Schema.Types.ObjectId, ref: 'User'},
    "theater": {type: Schema.Types.ObjectId, ref: 'Theater'},
    "movie": {type: Schema.Types.ObjectId, ref: 'Movie'}
});




module.exports = db.model('Seat', seatSchema);