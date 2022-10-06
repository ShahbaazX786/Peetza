const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    id:Number,
    tname:String,
    price:Number,
    image:String
});

const Ingredient = mongoose.model('Ingredient',IngredientSchema); 

module.exports = Ingredient;