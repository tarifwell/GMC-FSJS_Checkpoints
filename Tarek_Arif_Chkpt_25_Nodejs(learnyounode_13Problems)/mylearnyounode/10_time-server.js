//net module to create a raw TCP server (not need for HTTP module)

const net = require('net');
//strftime module to get and format time
const strftime = require('strftime');
const port = Number(process.argv[2]);

//Get current time and format it as needed
let time = strftime('%F %R', new Date());

//create TCP server
const server = net.createServer((socket) => {
  //After sending the string, connection will be closed
  socket.write(time + '\n');
  socket.end('');
});

server.listen(port);








//-----------------------------------------------------
//Another possibility without requiring the strftime package from npm
/*
const net = require('net');
const port = Number(process.argv[2]);

function formatTime (partOfTime) {
  return (partOfTime < 10 ? '0'+partOfTime : partOfTime);
}

const date = new Date();
let time = date.getFullYear() + '-'
  + formatTime(date.getMonth() + 1) + '-'
  + formatTime(date.getDate()) + ' '
  + formatTime(date.getHours()) + ':'
  + formatTime(date.getMinutes());

//create TCP server
const server = net.createServer((socket) => {
  //After sending the string, connection will be closed
  socket.write(time + '\n');
  socket.end('');
});

server.listen(port);
*/
