//Program that performs an HTTP GET request to a provided URL
//The http.get() method is a shortcut for simple GET requests
const http = require('http');
const URL = process.argv[2];

//'response' object is a Node Stream object, we need three events from it : "data", "error" and "end"
http.get(URL, (response) => {
  //encoding received response object/Stream to a string
  response.setEncoding('utf8');

  response.on('error', (err) => console.error(err));

  response.on('data', receivedDdata => {
    console.log(receivedDdata);
  });
  //we can add:
  //response.on('end', () => console.log("End of Stream"));
})
