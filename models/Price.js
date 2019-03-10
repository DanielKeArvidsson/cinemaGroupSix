const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let priceSchema = new Schema({
  "name": String,
  "price": Number

})

module.exports = global.db.model('Price', priceSchema);