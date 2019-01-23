const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for seat

let seatSchema = new Schema({
    "user": { type: Schema.Types.ObjectId, ref: 'User' },
    "auditorium": { type: Schema.Types.ObjectId, ref: 'Auditorium' },
    "movie": { type: Schema.Types.ObjectId, ref: 'Movie' }
});




module.exports = db.model('Seat', seatSchema);