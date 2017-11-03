const boardsRoutes = require('../routes/boardsRoutes.js');
const listsRoutes = require('../routes/listsRoutes.js');
const cardsRoutes = require('../routes/cardsRoutes.js');
const usersRoutes = require('../routes/usersRoutes.js');

module.exports = (app) => {
  boardsRoutes(app);
  listsRoutes(app);
  cardsRoutes(app);
  usersRoutes(app);
};
