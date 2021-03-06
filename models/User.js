const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let userSchema = new Schema(  {
  ticket: {type: Schema.Types.ObjectId, ref: 'Ticket'},
  firstName : {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});
 
// pre save let's us replace/changed data
// before we save a document
userSchema.pre('save', async function(){
  // here we replace the password with the encrypted password
  this.password = await bcrypt.hash(this.password + passwordSalt, 10);
});
 
module.exports = db.model('User', userSchema);