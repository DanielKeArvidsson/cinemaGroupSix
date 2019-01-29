
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
let auditoriumData = require('./auditoriums.json')
let Auditorium = require('./models/Auditorium')
let Ticket = require('./models/Ticket')


async function importJsonDataToDb() {
  let allAuditoriumsCount = await Auditorium.count();
  let allMoviesCount = await Movie.count();
  let allProgramCount = await Program.count();
  if (allAuditoriumsCount > 0) {
    console.log('deleted old auditoriums', await Auditorium.remove({}));
  }
  if (allProgramCount > 0) {
    console.log('Deleted old program', await Program.remove({}));
  }
  if (allMoviesCount > 0) {
    console.log('Deleted old Movies', await Movie.remove({}));
  }
  for (let data of auditoriumData) {
    let auditorium = new Auditorium(data)
    await auditorium.save();
  }
  for (let data of programData) {
    let program = new Program(data)
    await program.save();
  }

  for (let data of movieData) {
    let movie = new Movie(data);
    await movie.save();
  }
  allAuditoriumsCount = await Auditorium.count();
  allProgramCount = await Program.count();
  allMoviesCount = await Movie.count();
  console.log(`Imported ${allAuditoriumsCount} auditoriums to the database`)
  console.log(`Imported ${allMoviesCount} movies to the database`);
  console.log(`Imported ${allProgramCount} programs to the database`);

  process.exit();
}