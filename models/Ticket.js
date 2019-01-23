const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for ticket

let ticketSchema = new Schema({
    "showtime":{type: Schema.Types.ObjectId, ref: 'Showtime'},
    "purchasedAt": Date,
    "purchasedBy": {type: Schema.Types.ObjectId, ref: 'User'},
    "isRedeemed": Boolean,
    "movie": {type: Schema.Types.ObjectId, ref: 'Movie'},
    "seat":{type: Schema.Types.ObjectId, ref: 'Seat'},
    "auditorium": {type: Schema.Types.ObjectId, ref:'Program'}


});



module.exports = db.model('Ticket', ticketSchema);