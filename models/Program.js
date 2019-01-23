const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let programSchema = new Schema({
  "auditorium": String,
  "film": String,
  "date": String,
  "time": String
});



module.exports = db.model('Program', programSchema);