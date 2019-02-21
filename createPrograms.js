const mongoose = require('mongoose');
//this one is temporary so to see the result in the console

// Connect to db
let dbName = 'cinema_booking'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });
global.db = mongoose.connection;
db.on('error', () => console.log('Could not connect to DB'));
db.once('open', () => {
  console.log('Connected to DB');
  generatePrograms();
});

const Movie = require('./models/Movie');
const Auditorium = require('./models/Auditorium')
const Program = require('./models/Program')

//create a function to generate at least 84 movie viewings
async function generatePrograms() {
  console.log('Deleted old programs', await Program.remove({}));

  const minViewings = 20;
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

    //randomise hour starting at 17:00 and mins for every half and whole hr  
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
      "movie": moviesArr.pop().title,
      "auditorium": auditoriumsArr.pop().name,
      "time": 17 + hoursRandom + ':' + minutesRandom + '0',
      "date": date.getFullYear() + '-' + month + '-' + dayOfShow,
    });

    console.log(program)


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


