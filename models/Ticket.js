const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for ticket

let ticketSchema = new Schema({
    "program": { type: Schema.Types.ObjectId, ref: 'Program' },
    "purchasedAt": { type: Date, default: new Date() },
    "purchasedBy": { type: Schema.Types.ObjectId, ref: 'User' },
    "seat": [Number]
});



module.exports = db.model('Ticket', ticketSchema);