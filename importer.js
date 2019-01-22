
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

let Movie = require('./models/Movie');
let movieData = require('./movies.json');
let Program = require('./models/Program');
let programData = require('./cinemaPrograms.json')

async function importJsonDataToDb() {

  let allMoviesCount = await Movie.count();
  let allProgramCount = await Program.count();
  if (!allMoviesCount) {
    console.log('Deleted old program', await Program.remove({}));
  }
  if (allMoviesCount > 0) {
    console.log('Deleted old Movies', await Movie.remove({}));
  }
  for (let data of programData) {
    let program = new Program(data)
    await program.save();
  }

  for (let data of movieData) {
    let movie = new Movie(data);
    await movie.save();
  }
  allProgramCount = await Program.count();
  allMoviesCount = await Movie.count();
  console.log(`Imported ${allMoviesCount} movies to the database`);
  console.log(`Imported ${allProgramCount} programs to the database`);

  process.exit();
}