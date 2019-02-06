const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for ticket

let ticketSchema = new Schema({
    "program": { type: Schema.Types.ObjectId, ref: 'Program', required: true },
    // "purchasedAt": { type: Date, default: new Date() },
    "user": { type: Schema.Types.ObjectId, ref: 'User', required: true },
    "seats": [{ type: Number, required: true }],
    "tickets": { "kids": Number, "senior": Number, "adult": Number }
});



module.exports = db.model('Ticket', ticketSchema);