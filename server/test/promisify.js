const request = require('request');

const util = require('util');

const url = "https://api.chucknorris.io/jokes/random";

// Use the util to promisify the request method
function callback(cb){

    cb(1);
}

const promise = util.promisify(callback);

// Use the new method to call the API in a modern then/catch pattern

promise().then(data => {

   //let content = JSON.parse(data);
   
  console.log(data);
   
}).catch(err => console.log('error: ', err))