
const mongoose = require('mongoose');

// Connect to db
let dbName = 'cinema_booking'
mongoose.connect(`mongodb://localhost/${dbName}`);
global.db = mongoose.connection;
db.on('error', () => console.log('Could not connect to DB'));
db.once('open', () => {
  console.log('Connected to DB');
  importJsonDataToDb();
});

let Movie = require('./Movie');

let movieData = require('./movies.json');

async function importJsonDataToDb(){

  let allMoviesCount = await Movie.count();

  if(allMoviesCount > 0){
    console.log('Deleted old Movies', await Movie.remove({}));
  }
  for(let data of movieData){
    let movie = new Movie(data);
    await movie.save();
  }

  process.exit();
}