const boardController = require('../controllers/boardController.js');

module.exports = (app) => {

  // Boards
  app
    .route('/boards')
    .get(boardController.readBoards)
    .post(boardController.createBoard)
  // .delete(boardController.deleteBoards);

  app
    .route('/boards/:boardID')
    .get(boardController.findBoard)
    .put(boardController.updateBoard)
    .delete(boardController.deleteBoard);

};
