const Sass = require('./sass');
const config = require('./config.json');
const LoginHandler = require('./LoginHandler');
const settings = require('./settings.json');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


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
        db.on('error', () => reject('Could not connect to DB'));
        db.once('open', () => resolve('Connected to DB'));
      });
    }
  
    startWebServer() {
  
      // Add session (and cookie) handling to Express
      app.use(session({
        secret: settings.cookieSecret,
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({
          mongooseConnection: db
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
      // create special routes for login
      new LoginHandler(app, models.users);



      const express = require('express');
      const app = express();
      
      app.all('/json/*', (req,res) => {
        res.json({url: req.url, ok: true});
      });
      
      app.listen(3001);
    }
  
  }