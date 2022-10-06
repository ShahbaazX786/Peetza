const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    id:Number,
    type:String,
    price:Number,
    image:String,
    description:String,
    ingredients:[array],
    topping:[array]
});

const Pizza = mongoose.model('Pizza',PizzaSchema);

module.exports = Pizza;