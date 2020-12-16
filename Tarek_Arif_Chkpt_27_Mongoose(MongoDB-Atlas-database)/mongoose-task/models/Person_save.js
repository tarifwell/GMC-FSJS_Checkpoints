// Task 2:
// Create a person prototype

const mongoose = require("mongoose");
const schema = mongoose.Schema;

// - Creation of Person Mongoose Schema
// - Use of basic schema types with simple validators
const PersonSchema = new schema({
  name: { type: String, unique: true, required: true },
  age: { type: Number, default: 20, min: [18, "too young"], max: [55, "too old"] },
  favoriteFoods: { type: [String], lowercase: true },
  sportPractice: {type: String, enum:["foot","tennis","bike","running", "swimming","walking"], lowercase: true}
});

// Task 3:
// Create and Save a Record of a Model

// - Creation of Person Mongoose Model : Person constructor
// 'person': is a name of collection in our database
// 'PersonSchema' : schema of our data in the database
let Person = mongoose.model("person", PersonSchema)

// - Creation of Person instance with Person constructor
let addingPerson = ()=>{
  Person.create({
      name: "Sihem",
      age: 25,
      favoriteFoods: ["fruits","pizza","tea"],
      sportPractice: "tennis"
    },
    (error, newPerson)=>{
      if(error) {
        console.log("---- ERROR: person can't be saved ---- \n");
      }else{
        newPerson.save((err, data)=>{
          if(err) {
            console.log("ERROR: person can't be saved", err);
          }else{
            console.log(`---- \"${newPerson.name}\" was successefully saved ----\n`)
          }
        });
      }
    }
  )
}
module.exports = addingPerson;
