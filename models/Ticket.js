const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for ticket

let ticketSchema = new Schema({
    "program": { type: Schema.Types.Mixed, ref: 'Program'},
    // "purchasedAt": { type: Date, default: new Date() },
    "user": { type: Schema.Types.ObjectId, ref: 'User'},
    "programId": {type: String},
    "seats": {type: Schema.Types.Mixed},
    "tickets": { "kids": Number, "senior": Number, "adult": Number }
});



module.exports = db.model('Ticket', ticketSchema);