//HTTP server that serves the same text file for each received request. The path to file was given by the command-line argument.

const http = require('http');
const fs = require('fs');
const port = Number(process.argv[2]);
const file = process.argv[3]; //file Loction

//create a server
const server = http.createServer((request, response)=>{
  response.writeHead(200, { 'content-type': 'text/plain' });
  //stream the file and pipe it to the destination 'response'
  const stream = fs.createReadStream(file, { encoding: 'utf8' });
  stream.pipe(response);
});

server.listen(port);
