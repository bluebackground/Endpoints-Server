const boardController = require('../controllers/boardController.js');
const listController = require('../controllers/listController.js');
const cardController = require('../controllers/cardController.js');
const userController = require('../controllers/userController.js');

module.exports = (app) => {

  // Boards
  app
    .route('/boards')
    .get(boardController.readBoards)
    .post(boardController.createBoard)
    .delete(boardController.deleteBoards);

  app
    .route('/boards/:boardID')
    .get(boardController.readBoard)
    .put(boardController.updateBaord)
    .delete(boardController.deleteBoard);

  // Lists
  app
    .route('/lists')
    .get(listController.readLists)
    .post(listController.createList)
    .delete(listController.deleteLists);

  app
    .route('/lists/:listID')
    .get(listController.findList)
    .put(listController.updateList)
    .delete(listController.deleteList);

  // Cards
  // app
  //   .route('/cards')
  //   .get(cardController.readCards)
  //   .post(cardController.createCard)
  //   .delete(cardController.deleteCards);
  //
  // app
  //   .route('/cards/:cardID')
  //   .get(cardController.readCard)
  //   .put(cardController.updateCard)
  //   .delete(cardController.deleteCard);

  // Users
  app
    .route('/users')
    .get(userController.readUsers)
    .post(userController.createUser)
    .delete(userController.deleteUsers);

  app
    .route('/users/:userID')
    .get(userController.readUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);
};
