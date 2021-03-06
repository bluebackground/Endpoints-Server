const mongoose = require('mongoose');

const {
  STATUS_USER_ERROR,
  STATUS_SERVER_ERROR
} = require('../constants/constants.js');

// Support functions.
function validateStringInput(str) {
  if (str === undefined) return false;
  if (typeof str !== 'string') return false;
  return true;
}

function validateId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

function handleInvalidInput(res) {
  const message = {
    // message: 'Invalid Input'
    success: false
  };
  res.status(STATUS_USER_ERROR);
  // res.send(JSON.stringify(message, undefined, 2));
  res.json(message);
}

function handleServerError(res, err) {
  // const error = {
  //   stack: err.stack,
  //   message: err.message
  // };
  const message = {
    success: false
  }
  res.status(STATUS_SERVER_ERROR);
  // res.send(JSON.stringify(message, undefined, 2));
  res.json(message);
}

function testAll(callback) {
  const func = arguments[0];
  const values = arguments;
  for (let i = 1; i < values.length; i++) {
    if (!func(values[i])) return false;
  }
  return true;
}

module.exports = {
  validateStringInput,
  validateId,
  handleServerError,
  handleInvalidInput,
  testAll
}
