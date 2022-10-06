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

app.listen(PORT,function(){
    console.log(`server started at port ${PORT} bro`);
});