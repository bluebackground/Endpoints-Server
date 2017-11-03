const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  parentBoard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'boards',
    required: true,
  },
  title: {
    type: String,
    required: true,
    maxlength: 120,
  },
  cards: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'cards',
    default: []
  }
});

// const ListSchema = new mongoose.Schema({
//   parentBoard: {
//     type: String,
//     default: null
//   },
//   title: {
//     type: String,
//     required: true,
//     maxlength: 120,
//   },
//   cards: {
//     type: Array,
//     default: []
//   }
// });

// STATIC METHODS
ListSchema.statics.getAllLists = function () {
  return;
}

// OBJECT METHODS
ListSchema.methods.getTitle = function () {
  return this.title;
}

ListSchema.methods.getCards = function () {
  return this.cards;
}

const List = mongoose.model('List', ListSchema, 'lists');

module.exports = List;
