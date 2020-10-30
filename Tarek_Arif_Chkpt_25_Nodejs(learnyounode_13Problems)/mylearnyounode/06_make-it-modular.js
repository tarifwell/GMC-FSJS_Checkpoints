//modular way to do the previous exercise (05)
//we created our module '06_mymodule.js' and import it

const mymodule = require('./06_mymodule');
const directory = process.argv[2];
//extension without adding dot (according to instructions)
const extension = process.argv[3];

//callback function has two arguments passed by mymodule
mymodule(directory, extension, (err, filteredList)=> {
  //handling error:
  if (err) return console.error(err);
  filteredList.forEach(file => {
    console.log(file);
  });
});
