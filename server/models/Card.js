const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
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
  priority: {
    type: Number,
    default: 5
  },
  dueDate: {
    type: Date,
    default: null
  }
});

// STATIC METHODS
CardSchema.statics.getAllCards = function () {
  return;
}

// OBJECT METHODS
CardSchema.methods.getTitle = function () {
  return this.title;
}

CardSchema.methods.getDescription = function () {
  return this.description;
}

CardSchema.methods.getPriority = function () {
  return this.priority;
}

CardSchema.methods.getDueDate = function () {
  return this.dueDate;
}

const Card = mongoose.model('Card', CardSchema, 'cards');

module.exports = Card;
