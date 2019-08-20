const mongoose = require('mongoose');
const dishModel = mongoose.model('Dish');

exports.create_dish = function(req, res) {
  const newDish = new dishModel(req.body);
  newDish.save(function(err, dish) {
    if(err) {
      res.send(err);
    } else {
      dishModel.find({}, function(error, data) {
        if(error) {
          res.send(error);
        }
        res.json(data);
      })
    }
  })
}