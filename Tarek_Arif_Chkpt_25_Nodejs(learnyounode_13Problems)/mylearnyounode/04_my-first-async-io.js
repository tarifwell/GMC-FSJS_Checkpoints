//Asynchronous program
//read form the file system on the hard drive with fs.readFile()

const fs = require('fs');
const file = process.argv[2]; //file path

//readFile system and callback function
fs.readFile(file, 'utf8', (err, fileContents) => {
  //error handling
  if(err) return console.error(err);
  const nbrNewLines = fileContents.split('\n').length - 1;
  console.log(nbrNewLines);
});

//supplementary code to test asynchronous action
console.log('I am a code at the bottom of the file');
