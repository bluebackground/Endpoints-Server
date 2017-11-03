const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  title: {
    type: String,
    required: true,
    maxlength: 120
  },
  description: {
    type: String,
    required: true,
    maxlength: 800
  },
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'users',
    default: []
  },
  lists: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'lists',
    default: []
  }
});

// STATIC METHODS
BoardSchema.statics.getAllBoards = function () {
  return;
}

// OBJECT METHODS
BoardSchema.methods.getTitle = function () {
  return this.title;
}

BoardSchema.methods.getDescription = function () {
  return this.desription;
}

const Board = mongoose.model('Board', BoardSchema, 'boards');

module.exports = Board;
