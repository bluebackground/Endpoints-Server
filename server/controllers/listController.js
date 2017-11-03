const mongoose = require('mongoose');
const List = require('../models/List.js');

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
const createList = (req, res) => {
  const {
    title,
    cards,
    parentBoard
  } = req.body;

  if (testAll(validateStringInput, title, parentBoard) && validateId(parentBoard)) {
    const newList = new List({
        title,
        cards,
        parentBoard
      }).save()
      .then((list) => {
        // res.send(JSON.stringify(list, undefined, 2));
        res.json(list);
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

const readLists = (req, res) => {
  List.find({})
    .exec()
    .then((lists) => {
      // res.send(JSON.stringify(lists, undefined, 2));
      res.json(lists);
    })
    .catch((err) => {
      handleServerError(res);
    });
};

const findList = (req, res) => {
  const {
    listID
  } = req.params;
  if (validateId(listID)) {
    List.findById(listID)
      .exec()
      .then((list) => {
        // res.send(JSON.stringify(list, undefined, 2));
        res.json(list);
      })
      .catch((err) => {
        handleServerError(res, err);
      });
    return;
  }
  handleInvalidInput(res);
};

const updateList = (req, res) => {
  const {
    listID
  } = req.params;

  const {
    parentBoard,
    cards,
    title
  } = req.body;

  if (validateId(listID) && validateId(parentBoard) && validateStringInput(title)) {
    List.findByIdAndUpdate(listID, {
        parentBoard,
        cards,
        title
      }, {
        new: true
      })
      .exec()
      .then((list) => {
        // res.send(JSON.stringify(list, undefined, 2));
        res.json(list);
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
const deleteList = (req, res) => {
  const {
    listID
  } = req.params;

  if (validateId(listID)) {
    List.findByIdAndRemove(listID)
      .exec()
      .then((list) => {
        // res.send(JSON.stringify(list, undefined, 2));
        res.json(list);
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
  createList,
  readLists,
  findList,
  updateList,
  deleteList
};
