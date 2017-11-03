const mongoose = require('mongoose');
const Board = require('../models/Board.js');

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
const createBoard = (req, res) => {
  const {
    owner,
    title,
    description
  } = req.body;

  if (testAll(validateStringInput, title, description) && validateId(owner)) {
    const newUser = new Board({
        owner,
        title,
        description
      }).save()
      .then((board) => {
        // res.send(JSON.stringify(board, undefined, 2));
        res.json(board);
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

const readBoards = (req, res) => {
  Board.find({})
    .exec()
    .then((boards) => {
      // res.send(JSON.stringify(boards, undefined, 2));
      res.json(boards);
    })
    .catch((err) => {
      handleServerError(res);
    });
};

const findBoard = (req, res) => {
  const {
    boardID
  } = req.params;
  if (validateId(boardID)) {
    Board.findById(boardID)
      .exec()
      .then((board) => {
        // res.send(JSON.stringify(board, undefined, 2));
        res.json(board);
      })
      .catch((err) => {
        handleServerError(res, err);
      });
    return;
  }
  handleInvalidInput(res);
};

const updateBoard = (req, res) => {
  const {
    boardID
  } = req.params;

  const {
    owner,
    title,
    description
  } = req.body;

  if (validateId(boardID) && testAll(validateStringInput, title, description)) {
    Board.findByIdAndUpdate(boardID, {
        owner,
        title,
        description
      }, {
        new: true
      })
      .exec()
      .then((board) => {
        // res.send(JSON.stringify(board, undefined, 2));
        res.json(board);
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
const deleteBoard = (req, res) => {
  const {
    boardID
  } = req.params;

  if (validateId(boardID)) {
    Board.findByIdAndRemove(boardID)
      .exec()
      .then((board) => {
        // res.send(JSON.stringify(board, undefined, 2));
        res.json(board);
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
  createBoard,
  readBoards,
  findBoard,
  updateBoard,
  deleteBoard
};
