const mongoose = require('mongoose');
const Card = require('../models/Card.js');

const {
  STATUS_SERVER_ERROR,
  STATUS_USER_ERROR
} = require('../constants/constants.js');

// Support functions
const {
  validateStringInput,
  validateId,
  handleServerError,
  handleInvalidInput,
  testAll
} = require('../helpers/handlers.js');

// TODO: add list to parent board.
const createCard = (req, res) => {
  const {
    owner,
    title,
    description
  } = req.body;

  if (testAll(validateStringInput, title, description) && validateId(owner)) {
    const newUser = new Card({
        owner,
        title,
        description
      }).save()
      .then((card) => {
        // res.send(JSON.stringify(card, undefined, 2));
        res.json(card);
        // res.json({
        //   success: true
        // });
      })
      .catch((err) => {
        handleServerError(res, err);
      });
    return;
  }
  handleInvalidInput(res);
};

const readCards = (req, res) => {
  Card.find({})
    .exec()
    .then((cards) => {
      // res.send(JSON.stringify(cards, undefined, 2));
      res.json(cards);
    })
    .catch((err) => {
      handleServerError(res);
    });
};

const findCard = (req, res) => {
  const {
    cardID
  } = req.params;
  if (validateId(cardID)) {
    Card.findById(cardID)
      .exec()
      .then((card) => {
        // res.send(JSON.stringify(card, undefined, 2));
        res.json(card);
      })
      .catch((err) => {
        handleServerError(res, err);
      });
    return;
  }
  handleInvalidInput(res);
};

const updateCard = (req, res) => {
  const {
    cardID
  } = req.params;

  const {
    owner,
    title,
    description
  } = req.body;

  if (validateId(cardID) && testAll(validateStringInput, title, description)) {
    Card.findByIdAndUpdate(cardID, {
        owner,
        title,
        description
      }, {
        new: true
      })
      .exec()
      .then((card) => {
        // res.send(JSON.stringify(card, undefined, 2));
        res.json(card);
        // res.json({
        //   success: true
        // });
      })
      .catch((err) => {
        handleServerError(res, err);
      });
    return;
  }
  handleInvalidInput(res);
};

// TODO: remove list id from parent board
const deleteCard = (req, res) => {
  const {
    cardID
  } = req.params;

  if (validateStringInput(cardID)) {
    Board.findByIdAndRemove(bocardIDardID)
      .exec()
      .then((card) => {
        // res.send(JSON.stringify(card, undefined, 2));
        res.json(card);
        // res.json({
        //   success: true
        // });
      })
      .catch((err) => {
        handleServerError(res, err);
      })
    return;
  }
  handleInvalidInput(res);
};

module.exports = {
  createCard,
  readCards,
  findCard,
  updateCard,
  deleteCard
};
