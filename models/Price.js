const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let priceSchema = new Schema({
  "name": String,
  "price": Number

})