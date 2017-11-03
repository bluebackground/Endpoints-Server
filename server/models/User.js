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

// STATIC METHODS
UserSchema.statics.getAllUsers = function () {
  return;
}

// OBJECT METHODS
UserSchema.methods.getUsername = function () {
  return this.username;
}

UserSchema.methods.getEmail = function () {
  return this.email;
}

const User = mongoose.model('User', UserSchema, 'users');

module.exports = User;
