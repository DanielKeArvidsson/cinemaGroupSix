
const mongoose = require('mongoose');

// Connect to db
let dbName = 'cinema_booking'
mongoose.connect(`mongodb://localhost/${dbName}`);
global.db = mongoose.connection;
db.on('error', () => console.log('Could not connect to DB'));
db.once('open', () => {
  console.log('Connected to DB');
  importJsonDataToDb().then(() => {
    generatePrograms();
  });
});

let Movie = require('./models/Movie');
let movieData = require('./data/movies.json');
let Auditorium = require('./models/Auditorium')
let auditoriumData = require('./data/auditoriums.json')
let Ticket = require('./models/Ticket')
const Program = require('./models/Program')


async function importJsonDataToDb() {
  let allAuditoriumsCount = await Auditorium.count();
  let allMoviesCount = await Movie.count();
  if (allAuditoriumsCount > 0) {
    console.log('deleted old auditoriums', await Auditorium.remove({}));
  }
  if (allMoviesCount > 0) {
    console.log('Deleted old Movies', await Movie.remove({}));
  }
  for (let data of auditoriumData) {
    let auditorium = new Auditorium(data)
    await auditorium.save();
  }
  for (let data of movieData) {
    let movie = new Movie(data);
    await movie.save();
  }
  allAuditoriumsCount = await Auditorium.count();
  allMoviesCount = await Movie.count();
  console.log(`Imported ${allAuditoriumsCount} auditoriums to the database`)
  console.log(`Imported ${allMoviesCount} movies to the database`);
  return;
}




//create a function to generate at least 84 movie viewings
async function generatePrograms() {
  console.log('Deleted old programs', await Program.remove({}));

  const minViewings = 85;
  const dayAsMillis = 24 * 60 * 60 * 1000;

  let movies = await Movie.find();
  let auditoriums = await Auditorium.find();
  //create copies of movies and audirtoriums array
  let moviesArr = movies.slice();
  let auditoriumsArr = auditoriums.slice();
  let dayCounter = 0;

  for (let view = 1; view < minViewings; view++) {
    if (!(view % auditoriumsArr.length + 1)) {
      dayCounter++;
      moviesArr = movies.slice();
      auditoriumsArr = auditoriums.slice();
      console.log('\n')
    }

    //randomise hours starting at 17:00 and mins for every half and whole hr  
    let hoursRandom = Math.floor(Math.random() * 3);
    let minutesRandom = (Math.round(Math.random()) * 3)

    //Get day and month for the program
    let date = new Date(Date.now() + dayAsMillis * dayCounter);
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let dayOfShow = date.getDate().toString().padStart(2, '0');

    //removing the random choice with .pop()
    moviesArr = shuffle(moviesArr);
    auditoriumsArr = shuffle(auditoriumsArr);

    let program = new Program({
      "movie": moviesArr.pop(),
      "auditorium": auditoriumsArr.pop(),
      "time": 17 + hoursRandom + ':' + minutesRandom + '0',
      "date": date.getFullYear() + '-' + month + '-' + dayOfShow,
    });

    //shuffeling array
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    await program.save()
  }
  process.exit();
}


