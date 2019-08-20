module.exports = function(app) {
  const dishController = require('../controllers/DishController');

  app.route('/create_dish')
    .post(dishController.create_dish);
}