const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for ticket

let ticketSchema = new Schema({
    
    "purchasedAt": Date,
    "purchasedBy": {type: Schema.Types.ObjectId, ref: 'User'},
    "movie": {type: Schema.Types.ObjectId, ref: 'Movie'},
    "seat":{type: Schema.Types.ObjectId, ref: 'Seat'},
    "auditorium": {type: Schema.Types.ObjectId, ref:'Auditorium'}


});



module.exports = db.model('Ticket', ticketSchema);