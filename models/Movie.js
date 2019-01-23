const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for movie

let movieSchema = new Schema({
    "title": String,
    "genre": String,
    "language": String,
    "subtitles": String,
    "showtimes": [showtimeSchema]

});



module.exports = db.model('Movie', movieSchema);