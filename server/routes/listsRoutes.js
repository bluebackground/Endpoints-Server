const listController = require('../controllers/listController.js');

module.exports = (app) => {

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
};
