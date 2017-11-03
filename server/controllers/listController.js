const mongoose = require('mongoose');
const List = require('../models/List.js');

const {
  STATUS_SERVER_ERROR,
  STATUS_USER_ERROR
} = require('../constants/constants.js');

// Support functions
const {
  validateStringInput,
  handleServerError,
  handleInvalidInput,
  testAll
} = require('../helpers/handlers.js');

// TODO: add list to parent board.
const createList = (req, res) => {
  const {
    title,
    owner,
    parentBoard
  } = req.body;

  if (testAll(validateStringInput, title, owner, parentBoard)) {
    const newPost = new Post({
        title,
        owner,
        parentBoard
      }).save()
      .then((list) => {
        // res.send(JSON.stringify(list, undefined, 2));
        // res.json(list);
        res.json({
          success: true
        });
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
    id
  } = req.params;
  if (validateStringInput(id)) {
    List.findById(id)
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
    id
  } = req.params;

  const {
    parentBoard,
    owner,
    title
  }

  if (validateStringInput(id)) {
    Post.findByIdAndUpdate(id, {
        parentBoard,
        owner,
        title
      }, {
        new: true
      })
      .exec()
      .then((list) => {
        res.json({
          success: true
        });
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
    id
  } = req.params;

  if (validateStringInput(id)) {
    List.findByIdAndRemove(id)
      .exec()
      .then((list) => {
        res.json({
          success: true
        });
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
