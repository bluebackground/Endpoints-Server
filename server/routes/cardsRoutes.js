const cardController = require('../controllers/cardController.js');

module.exports = (app) => {

  //  Cards
  app
    .route('/cards')
    .get(cardController.readCards)
    .post(cardController.createCard)
  // .delete(cardController.deleteCards);

  app
    .route('/cards/:cardID')
    .get(cardController.findCard)
    .put(cardController.updateCard)
    .delete(cardController.deleteCard);

};
