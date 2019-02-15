const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let programSchema = new Schema({
  "auditorium": { type: Schema.Types.ObjectId, ref: 'Auditorium', required: true },
  "movie": { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
  "date": { type: String, required: true },
  "time": { type: String, required: true },
  "images": [String],
  "youtubeTrailers": String,
  // "booking": [{ type: Schema.Types.ObjectId, ref: 'Booking', required: true }]
}, { toJSON: { virtuals: true } });

programSchema.virtual('bookings', {
  ref: 'Booking',
  localField: '_id',
  foreignField: 'program'
});

programSchema.pre('findOne', function () {
  this.populate({
    path: 'auditorium',
    select: 'name seats -_id'
  })
    .populate({
      path: 'movie',
      select: 'title images'
    })
    .populate({
      path: 'tickets',
      select: 'seats program -_id'
    });
});

module.exports = db.model('Program', programSchema);