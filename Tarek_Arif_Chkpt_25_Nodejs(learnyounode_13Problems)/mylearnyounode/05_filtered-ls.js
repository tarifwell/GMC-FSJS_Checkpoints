//print a list of files of a given directory, it'll be filtered by extension name

const fs = require('fs');
const path = require('path');
const directory = process.argv[2];
const extension = `.${process.argv[3]}`;

//list is an array of strings
fs.readdir(directory, (err, list)=>{
  //console.log(list);
  if (err) return console.error(err);
  list.forEach(file => {
    if(path.extname(file)===extension)
      console.log(file);
  });
  // other solution:
  /* let tab = list.filter(file => file.split('.')[1] === extension);
  console.log(tab); */
});
