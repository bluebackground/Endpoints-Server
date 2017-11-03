const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  // passwordHash: {
  //   type: String,
  //   required: true
  // }
});

const User = mongoose.model('User', UserSchema, 'users');

module.exports = User;
