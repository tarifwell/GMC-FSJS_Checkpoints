// Task 3 (part 2):
// Create and Save a Record of a Model with document.save() method

var Person = require('./Person')

// - Creation of Person instance with Person constructor
var addingPerson = ()=>{
  var newPerson = new Person({
    name: "Karim",
    age: 30,
    favoriteFoods: ["breakfast","coffee","tea"],
    sportPractice: "footing"
  });
  
  newPerson.save((err, data)=>{
    if(err) {
      console.log("---- ERROR: person can't be saved ---- \n");
    }else{
      console.log(`---- \"${data.name}\" was successefully saved ----\n`);
    }
  });
}

module.exports = addingPerson;
