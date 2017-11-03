const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  parentBoard: {
    type: mongoose.Types.ObjectId,
    ref: 'boards',
    required: true,
  },
  title: {
    type: String,
    required: true,
    maxlength: 120,
  },
  cards: {
    type: [mongoose.Type.ObjectId],
    ref: 'cards',
    default: []
  }
});

// STATIC METHODS
ListSchema.statics.getAllLists() {
  return;
}

// OBJECT METHODS
ListSchema.methods.getTitle() {
  return this.title;
}

const List = mongoose.model('List', ListSchema, 'lists');

module.exports = List;
