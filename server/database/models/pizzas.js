const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    _id:String,
    id:Number,
    type:String,
    price:Number,
    image:String,
    description:String,
    ingredients:Object,
    topping:Object
});

const Pizza = mongoose.model('Pizza',PizzaSchema);

module.exports = Pizza;