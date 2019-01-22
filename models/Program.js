const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let programSchema = new Schema({
  "auditorium": String,
  "film": String,
  "date": Date,
  "time": Number
});



module.exports = db.model('Program', programSchema);