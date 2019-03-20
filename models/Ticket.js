const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema for ticket

let ticketSchema = new Schema({
  program: { type: Schema.Types.Mixed, ref: "Program" },
  user: { type: String },
  purchasedAt: { type: String },
  price: { type: Number },
  seats: { type: Schema.Types.Mixed, required: true },
  programId: { type: String, required: true },
  bookingNum: { type: String },
  tickets: { kids: Number, senior: Number, adult: Number },
  timesBooked: { type: Schema.Types.Mixed, ref: "Movie" }
});
//listen to the socket controller
ticketSchema.emit('newTicket', this);

module.exports = global.db.model("Ticket", ticketSchema);
