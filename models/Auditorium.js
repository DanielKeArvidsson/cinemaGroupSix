const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let auditoriumSchema = new Schema({
    "name": String,
    "seatsPerRow": [Number],
    "program": [{ type: Schema.Types.ObjectId, ref: 'Program', required: true }],
    "info": String,
    "ljud": String,
    "projektor": String,
    "image": String
});

module.exports = db.model('Auditorium', auditoriumSchema);