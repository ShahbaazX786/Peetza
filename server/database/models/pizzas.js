const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    _id:String,
    id:Number,
    type:String,
    price:Number,
    name:String,
    image:String,
    description:String,
    ingredients:Object,
    topping:Object
});

const Pizza = mongoose.model('Pizza',PizzaSchema);

module.exports = Pizza;