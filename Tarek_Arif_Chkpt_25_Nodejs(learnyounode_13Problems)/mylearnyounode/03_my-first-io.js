//synchronous program
//read form the file system on the hard drive with fs.readFileSync()

const fs = require('fs');

//get the buffer
const buffer = fs.readFileSync(process.argv[2]);

//convert buffer object to a string
const str = buffer.toString();

//count the number of newline characters
const nbrNewLines = str.split('\n').length - 1;
console.log(nbrNewLines);
