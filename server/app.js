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