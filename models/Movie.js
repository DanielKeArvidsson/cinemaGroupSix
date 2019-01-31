const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for movie

let movieSchema = new Schema({
    "title": { type: String, required: true },
    "productionCountries": [String],
    "productionYear": Number,
    "length": Number,
    "genre": String,
    "distributor": String,
    "language": String,
    "subtitles": String,
    "director": String,
    "actors": [String],
    "description": String,
    "images": [String],
    "youtubeTrailers": String,
    "reviews": [{
        "source": String,
        "quote": String,
        "stars": Number,
        "max": Number
    }],
    "program": [{ type: Schema.Types.ObjectId, ref: 'Program', required: true }]

});



module.exports = db.model('Movie', movieSchema);