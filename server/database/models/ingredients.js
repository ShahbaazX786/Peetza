const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    _id:String,
    id:Number,
    tname:String,
    price:Number,
    image:String
});

const Ingredient = mongoose.model('Ingredient',IngredientSchema); 

module.exports = Ingredient;