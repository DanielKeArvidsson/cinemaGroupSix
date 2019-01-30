const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let programSchema = new Schema({
  "auditorium": { type: Schema.Types.ObjectId, ref: 'Auditorium', required: true },
  "movie":  { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
  "date": { type: String, required: true },
  "time": { type: String, required: true },
  "booking": [{ type: Schema.Types.ObjectId, ref: 'Booking', required: true }]
});



module.exports = db.model('Program', programSchema);