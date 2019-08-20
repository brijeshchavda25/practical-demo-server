const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DishSchema = new Schema({
  meal_name: {
    type: String
  },
  no_of_people: {
    type: Number,
  },
  restaurant: {
    type: String,
  },
  dishes: {
    type: [{
      dish_name: {
        type: String,
      },
      serving_people: {
        type: Number
      }
    }]
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Dish', DishSchema);