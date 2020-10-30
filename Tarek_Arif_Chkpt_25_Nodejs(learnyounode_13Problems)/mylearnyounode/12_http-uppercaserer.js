//HTTP server receives only POST requests and converts incoming message to upper-case and returns it to the client
//through2-map package is used to 'transform' stream data, it takes a chunk of data and returns a chunk of data

const http = require('http');
const map = require('through2-map');
const port = Number(process.argv[2]);

const server = http.createServer((req, res)=> {
  //check if requests received are POST requests
  if(req.method !== 'POST') return res.end('This server only accept POST request');

  req.pipe(map(chunk => {
    //make each chunk uppercase
    return chunk.toString().toUpperCase();
  })).pipe(res);
});
server.listen(port);
