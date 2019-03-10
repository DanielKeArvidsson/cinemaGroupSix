const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let programSchema = new Schema({
  "auditorium": { type: Schema.Types.ObjectId, ref: 'Auditorium', required: true },
  "movie": { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
  "date": { type: String, required: true },
  "time": { type: String, required: true },
  "images": [String],
  "youtubeTrailers": String,
}, { toJSON: { virtuals: true } });

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

module.exports = global.db.model('Program', programSchema);