var mongoose = require('mongoose');
var validator = require('validator');

// Define our user schema
var UserSchema = new mongoose.Schema({
  username:{type: String, required: true},
  password: {type: String, required: true},
  email: {
    type: String,
    required: true,
    index: { unique: true },
    validate: [ validator.isEmail, 'Invalid email' ]
  },
  age: {type: Number, min: 10, max: 100}
});

module.exports = mongoose.model('User', UserSchema);
