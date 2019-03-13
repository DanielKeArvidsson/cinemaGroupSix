
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Sass = require('./sass');
const config = require('./config.json');
const CreateRestRoutes = require('./CreateRestRoutes');
const LoginHandler = require('./LoginHandler');
const settings = require('./settings.json');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const http = require('http');
const SocketIoController = require('./SocketIoController');

for (let conf of config.sass) {
  new Sass(conf);
}

module.exports = class Server {

  constructor() {
    this.start();
  }

  async start() {
    await this.connectToDb();
    await this.startWebServer();
  }

  connectToDb() {
    return new Promise((resolve, reject) => {
      let dbName = 'cinema_booking'
      mongoose.connect(`mongodb://localhost/${dbName}`);
      global.passwordSalt = settings.passwordSalt;
      global.db = mongoose.connection;
      global.db.on('error', () => reject('Could not connect to global.db'));
      global.db.once('open', () => resolve('Connected to global.db'));
    });
  }

  startWebServer() {

    // Create a web server
    const app = express();

    // Add body-parser to our requests
    app.use(bodyParser.json());

    // app.use(cors());

    // Add session (and cookie) handling to Express
    app.use(session({
      secret: settings.cookieSecret,
      resave: true,
      saveUninitialized: true,
      store: new MongoStore({
        mongooseConnection: global.db
      })
    }));

    // Set keys to names of rest routes
    const models = {
      movies: require('./models/Movie'),
      programs: require('./models/Program'),
      users: require('./models/User'),
      auditoriums: require('./models/Auditorium'),
      tickets: require('./models/Ticket')
    };

    global.models = models;
    
    // create all necessary rest routes for the models
    new CreateRestRoutes(app, global.db, models);

    // create special routes for login
    new LoginHandler(app, models.users);


  // Start the web server
const server = http.Server(app);
server.listen(3001, () => console.log('Listening on port 3000'));
 
// Add Socket.io
new SocketIoController(server);

  }

}
