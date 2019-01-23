const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for showtime

let showtimeSchema = new Schema({
    "date": Date,
    "price": Number,
    

});



module.exports = db.model('Showtime', showtimeSchema);