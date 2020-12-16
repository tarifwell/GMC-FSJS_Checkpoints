var Person = require('./Person')

// Task 4 :
// Create Many Records with model.create()

// - An array of objects in order to feed database
var arrayOfPeople = [{
    name: "Malek",
    age: 25,
    favoriteFoods: ["fruits","pizza","tea"],
    sportPractice: "footing"
  }, {
    name: "Chaima",
    age: 43,
    favoriteFoods: ["soda","cornflakes","bananas"],
    sportPractice: "running"
  }, {
    name: "Seif",
    age: 30,
    favoriteFoods: ["coffee","cake","steak"],
    sportPractice: "biking"
  }, {
    name: "Bechir",
    age: 35,
    favoriteFoods: ["salad","schips","pizza"],
    sportPractice: "tennis"
  }, {
    name: "Sarra",
    age: 20,
    favoriteFoods: ["fruits","salad","coffee"],
    sportPractice: "swimming"
  }, {
    name: "Marwen",
    age: 21,
    favoriteFoods: ["milk","chicken","cocktail"],
    sportPractice: "swimming"
  }, {
    name: "Mourad",
    age: 42,
    favoriteFoods: ["fruits","pizza","coffee"],
    sportPractice: "walking"
  }];


// - Creation of many instances of our models from an array of objects
var createManyPeople = ()=>{
  Person.create(arrayOfPeople, (error, peoples)=>{
    if(error) {
      console.log("---- ERROR: person can't be created and saved ---- \n");
    }else{
      console.log(`---- ${peoples.length} persons are successefully saved ----\n`)
      console.log(peoples);
    }
  })
}

module.exports = createManyPeople;
