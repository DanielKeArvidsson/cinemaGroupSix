
const mongoose = require('mongoose');

// Connect to db
let dbName = 'cinema_booking'
mongoose.connect(`mongodb://localhost/${dbName}`);
global.db = mongoose.connection;
db.on('error', () => console.log('Could not connect to DB'));
db.once('open', () => {
  console.log('Connected to DB');

});

// process.exit();