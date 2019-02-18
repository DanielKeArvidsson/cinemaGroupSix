const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for ticket

let ticketSchema = new Schema({
    "program": { type: Schema.Types.Mixed, ref: 'Program'},
    "user": {type: String},
    "purchasedAt": { type: Date},
    "price": {type: Number},
    "seats": {type: Schema.Types.Mixed, required: true},
    "programId": {type: String, required: true},
    "bookingNum": {type: String},
    "tickets": { "kids": Number, "senior": Number, "adult": Number }

});



module.exports = db.model('Ticket', ticketSchema);