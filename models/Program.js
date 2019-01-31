const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let programSchema = new Schema({
  "auditorium": String,
  "movie": String,
  "date": { type: String, required: true },
  "time": { type: String, required: true },
  "booking": String
});



module.exports = db.model('Program', programSchema);