const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

const URI = "mongodb://127.0.0.1:27017/Peetza";

mongoose.connect(URI,function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("connected to the database successfully bro!");
    }
});

const pizzaSchema = new mongoose.Schema({
  id:String,
  type:String,
  name:String,
  price:Number,
  image:String,
  description:String,
  ingredients:Object,
  toppings:Object
});

const Pizza = new mongoose.model('pizza',pizzaSchema);

app.get('/build',function(req,res){
  Pizza.find({},function(err,found){
    if(found.length === 0){
      console.log('There is no data available in the database');
    }
    else if(found){
      console.log('Data found in the database',found);
    }
    else{
      console.log(err);
    }
  });
});





app.listen(PORT,function(){
    console.log(`server started at port ${PORT} bro`);
});