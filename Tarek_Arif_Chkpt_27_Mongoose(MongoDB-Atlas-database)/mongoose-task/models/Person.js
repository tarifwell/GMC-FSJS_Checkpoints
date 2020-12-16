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
  sportPractice: {type: String, enum:["footing","tennis","biking","running", "swimming","walking"], lowercase: true}
});

// Task 3 (part 1):
// Create and Save a Record of a Model

// - Creation of Person Mongoose Model : Person constructor
// 'person': is a name of collection in our database
// 'PersonSchema' : schema of our data in the database
let Person = mongoose.model("person", PersonSchema)

module.exports = Person;
