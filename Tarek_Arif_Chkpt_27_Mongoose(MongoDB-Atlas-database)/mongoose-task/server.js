const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/connectDB');
const addingPerson = require('./models/OneRecord');
const createManyPeople = require('./models/ManyRecords');
const CRUD_Task = require('./models/MongooseCRUD');
const Person = require('./models/Person')

// Connect database
connectDB();

/* Summary :
  ---------------

  ► Task 1 : create Mongo Atlas Database and sotre MONGO_URI in.env file
    --> see '.env' and 'config/connectDB.js' files

  ► Task 2 : create a person prototype (personSchema)
  ► Task 3 (part 1) : create a Person Model
    --> see 'models/person.js' file


  Tasks from task 3 (part2) to task 12 :
  The remaining tasks are given by the following switch

  General Menu:
  ---------------
  choose one value of taskChoice varible: 
    (3) - for task 3 (part 2), or
    (4) - for task 4, or 
    (5) - to access the CRUD menu (tasks from 5 to 12) */
let taskChoice = 0;

switch(taskChoice){
  
/* ► Task 3 (part 2) : adding one record
    --> see 'models/OneRecord.js' */
  case 3: addingPerson(); break;

/* ► Task 4 : adding many records
    --> see 'models/ManyRecords.js' */
  case 4: createManyPeople("pizza"); break;

/* ► Tasks from 5 to 12: CRUD Operations
    --> for all operation see CRUD menu on 'models/MongooseCRUD.js' file
  choose a number of desired operation and write it in CRUD_Task(#) function
    (5) - .Find()
    (6) - .FindOne()
    (7) - .FindById()
    (8) -  Edit function
    (9) - .findOneAndUpdate()
    (10) - .findByIdAndRemove()
    (11) - .remove()
    (12) - ChainFilters function */
  case 5: CRUD_Task(0); break;
}

//middlewares
app.use(express.json())

app.get(("/"),(req, res)=>{
  Person.find()
  .then((persons)=>{
    console.log(persons)
    res.send(persons)
  })
  .catch((err)=> console.log("ERROR at GET ALL"));
});

// Run server
app.listen(port, (err) => {
  if (err) console.log("ERROR", err);
  else console.log(`Server is running on port ${port}`);
});
