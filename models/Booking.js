const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for booking

let bookingSchema = new Schema({
     
    "movie": String,
    "price": Number,
    "user":{ type: Schema.Types.ObjectId, ref: 'User' },
    "ticket": [{ type: Schema.Types.ObjectId, ref: 'Ticket' }],
    "seat": [Number]


})


module.exports = db.model('Booking', bookingSchema);