const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let auditoriumSchema = new Schema({
    "name": String,
    "seatsPerRow": [Number],
    "program": [{ type: Schema.Types.ObjectId, ref: 'Program', required: true }],
    "info": String,
    "ljud": String,
    "projektor": String,
    "image": String,
    "butik": String,
    "butikImage": String,
    "butikName": String,
    "aboutUs": String,
    "aboutusImage": String,
    "aboutusName": String,
    "regulations": String,
    "regulationName": String,
    "event": String,
    "eventImage": String,
    "eventName": String
});

module.exports = global.db.model('Auditorium', auditoriumSchema);