const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for booking

let bookingSchema = new Schema({
     
    "movie": String,
    "price": [Number],
    "user":{ type: Schema.Types.ObjectId, ref: 'User' },
   // "ticket": [{ type: Schema.Types.ObjectId, ref: 'Ticket' }],
    "seat": [Number]


})

// Create a class with methods/or getters/setters
// that every booking should have
/*
class BookingClass {

    getbooking(req,res) {
        let movieData = req.body.movieName + " " + req.body.movieDay + " " + req.body.mocieHour;
         bookingModel.find({ movie: movieData},  function (err, data) 
            {
                res.json({
                    "txt":"[AJAX - BOOKING] Ajax get permanently seats",
                    "booking": data
                });
            });
    };
    getinformationAboutSeat(req, res) {
        let movieData = req.body.movieName + " " + req.body.movieDay + " " + req.body.mocieHour;
        let seat = req.body.seat;
         bookingModel.find({ movie: movieData, seat: seat},  function (err,data) {
            res.json({
                "booking": data
            });
        });
    }; 
}
  
  // 3. Create the model and export it
  bookSchema.loadClass(BookingClass);
  */


module.exports = db.model('Booking', bookingSchema);