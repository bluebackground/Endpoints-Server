const mongoose = require('mongoose');
const User = require('../models/User.js');

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
const createUser = (req, res) => {
  const {
    username,
    email
  } = req.body;

  if (testAll(validateStringInput, username, email)) {
    const newUser = new User({
        username,
        email
      }).save()
      .then((user) => {
        // res.send(JSON.stringify(user, undefined, 2));
        res.json(user);
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

const readUsers = (req, res) => {
  User.find({})
    .exec()
    .then((users) => {
      // res.send(JSON.stringify(users, undefined, 2));
      res.json(users);
    })
    .catch((err) => {
      handleServerError(res);
    });
};

const findUser = (req, res) => {
  const {
    userID
  } = req.params;
  if (validateStringInput(userID)) {
    User.findById(userID)
      .exec()
      .then((user) => {
        // res.send(JSON.stringify(user, undefined, 2));
        res.json(user);
      })
      .catch((err) => {
        handleServerError(res, err);
      });
    return;
  }
  handleInvalidInput(res);
};

const updateUser = (req, res) => {
  const {
    userID
  } = req.params;

  const {
    username,
    email
  } = req.body;

  if (validateStringInput(userID)) {
    User.findByIdAndUpdate(userID, {
        username,
        email
      }, {
        new: true
      })
      .exec()
      .then((user) => {
        // res.send(JSON.stringify(user, undefined, 2));
        res.json(user);
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
const deleteUser = (req, res) => {
  const {
    userID
  } = req.params;

  if (validateStringInput(userID)) {
    User.findByIdAndRemove(userID)
      .exec()
      .then((user) => {
        // res.send(JSON.stringify(user, undefined, 2));
        res.json(user);
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
  createUser,
  readUsers,
  findUser,
  updateUser,
  deleteUser
};
