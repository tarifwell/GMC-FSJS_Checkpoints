//program that performs an HTTP GET request to a provided URL, using bl module to handle streams

const http = require('http');
const bl = require('bl');
const URL = process.argv[2];

//the response of http.get() is a stream object
http.get(URL, response => {
  //we pipe stream to the bl function
  response.pipe(bl((err, data) => {
    if(err) return console.error(err);
    //data is a buffer object need to be converted to a string
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
