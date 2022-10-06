const express = require('express');
const mongoose = require('./database/mongoose');
const cors = require('cors');//useful while working with many ports in localhost
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json()); // this is a middleware which is similar to body-Parser(a library which helps us to work with JSON data in express) 
// And experss integreated this library into the express itself as it was being used too much/frequent thereby reducing one dependency.

app.use(cors());
//CORS cross origin request secrutity.
// what happens here is that whenever a request is being made from other port except 3000 to the express then it will not authorize the request considering it as unsafe. so it becomes difficult to work with different ports in same localhost environment.
// so we need to use the library called as cors which bypasses this.



// importing models here
const Pizza = require('./database/models/pizzas');
const Ingredient = require('./database/models/ingredients');



// defining the express server routes here [the requests we make to the express server at port 3000 and then it will give us the data by fetching data from the database. using the mongoose library].

app.get('/build',function(req,res){
  Ingredient.find({})
  .then(ingredients => res.send(ingredients))
  .catch((err)=>console.log(err));
});

app.get('/build/:id',function(req,res){
  Ingredient.findOne({_id:req.params.id})
  .then(ingredient => res.send(ingredient))
  .catch((err)=>console.log(err));
});


//this is working fine in postman but you gotta always create a form to make a post request via html(view) remember that.
app.post('/ingredients',function(req,res){
  new Ingredient({
    'id':req.body.id,
    'tname':req.body.tname,
    'price':req.body.price,
    'image':req.body.image
  })
  .save()
  .then((ingredient)=>res.send(ingredient))
  .catch((error)=>console.log(error));
});

app.patch('/ingredients/:id',function(req,res){
  Ingredient.findByIdAndUpdate({'_id':req.params.id}, {$set:req.body})
  .then((ingredient)=>{res.send(ingredient)})
  .catch((error)=>{console.log(error)});
});

app.delete('/ingredients/:id',function(req,res){
  Ingredient.findByIdAndDelete(req.params.id)
  .then((ingredient)=>{res.send(ingredient)})
  .catch((error)=>{console.log(error)});
});


app.listen(PORT,function(){
    console.log(`server started at port ${PORT} bro`);
});