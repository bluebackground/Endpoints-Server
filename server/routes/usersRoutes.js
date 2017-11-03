const userController = require('../controllers/userController.js');

module.exports = (app) => {
  // Users
  app
    .route('/users')
    .get(userController.readUsers)
    .post(userController.createUser)
  // .delete(userController.deleteUsers);

  app
    .route('/users/:userID')
    .get(userController.findUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);
};
