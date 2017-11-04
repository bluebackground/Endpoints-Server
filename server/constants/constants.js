const {
  selectDatabaseURI
} = require('./env_config.js');

const DB_URL = selectDatabaseURI();
const STATUS_SERVER_ERROR = 500;
const STATUS_USER_ERROR = 422;
const SERVER_PORT = 5000;

// console.log(DB_URL);

module.exports = {
  DB_URL,
  STATUS_SERVER_ERROR,
  STATUS_USER_ERROR,
  SERVER_PORT
}
