const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');

const {
  DB_URL,
  SERVER_PORT
} = require('./constants/constants.js');

const server = express();
server.use(bodyParser.json());

mongoose.Promise = global.Promise;

const connect = mongoose.connect(DB_URL, {
  useMongoClient: true
});

if (process.env.NODE_ENV === 'test') {
  routes(server);
  server.listen(SERVER_PORT, () => {
    console.log(`Note: Server-Test does not check if mongod is running.`)
    console.log(`Note: Check to make sure MongoDB is running manually.`)
    console.log(`Status: Server started on port ${SERVER_PORT}...`);
  });
} else {
  connect.then(() => {
    routes(server);
    server.listen(SERVER_PORT);
    console.log(`Status: Server connecting to database URI: ${DB_URL}`);
    console.log(`Status: Server started on port ${SERVER_PORT}`);
  }, (err) => {
    console.log(`Status: Error in connection to database URI: ${DB_URL}`);
  });
}

module.exports = server;
