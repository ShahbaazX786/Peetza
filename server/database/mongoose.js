const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //this allows us to use promises which handles async code/functions ( async = which takes a long while to complete or it runs parallely with the main thread and returns the result when the function is executed.)

const URI = "mongodb://127.0.0.1:27017/Peetza";

mongoose.connect(URI).then(()=>{ //this is how you use async code .then/.catch/.await etc.
    console.log("connected to the mongodb successfully bro!"); 
}).catch((err)=>{
    console.log(err);
});

module.exports = mongoose;