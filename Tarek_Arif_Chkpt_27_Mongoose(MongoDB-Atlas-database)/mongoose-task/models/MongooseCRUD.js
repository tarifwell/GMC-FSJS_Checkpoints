var Person = require('./Person');

/* Tasks from 5 to 12 : CRUD operations
  Manipulation of different Mongoose CRUD operations

  CRUD menu opearations:
  -----------------------
  The selection of opérations below is made by the call of funtion CRUD_Task(#)
  form 'General Menu' located in 'server.js' file */
let CRUD_Task = (CRUD_TaskNumber) => {
  switch(CRUD_TaskNumber){
    case 5: CRUD_Find(); break;
    case 6: CRUD_FindOne("bananas"); break;
    case 7: CRUD_FindById("5fd95182484b6306fcdf6d81"); break;
    case 8: CRUD_Edit("5fd95182484b6306fcdf6d83"); break;
    case 9: CRUD_findOneAndUpdate("Seif"); break;
    case 10: CRUD_findByIdAndRemove("5fd95182484b6306fcdf6d86"); break;
    case 11: CRUD_Remove("Marwen"); break;
    case 12: CRUD_ChainFilters("coffee"); break;
  }
}

/* Task 5 :
  Using model.find() to search in database
  - search for a given name, trying {name:"Malek"}
  - Trying : {name:"Malek", age: 25}*/

var CRUD_Find = ()=>{
  Person.find({name:"Malek", age: 25})
  .then((result)=>{
    console.log(result)
  })
  .catch((err)=> console.log("ERROR: CRUD operation not executed"));
}


/* Task 6 :
  Using model.findOne() to return a single matching document from database

  - Find one person having a certain food in his favorites
  - Using function argument 'food' as search key: food = "pizza"*/

var CRUD_FindOne = (food)=>{
  Person.findOne({favoriteFoods: {$all:[food]}})
  .then((result)=>{
    console.log(result)
  })
  .catch((err)=> console.log("ERROR: CRUD operation not executed"));
}


/* Task 7 :
  Using model.findById() to Search by _id in database 

  - Find one person having a given _id
  - Using function argument 'personId' as the search key: personId = "5fd7a1b8bd488c312085f4e2"*/

var CRUD_FindById = (personId)=>{
  Person.findById(personId)
  .then((result)=>{
    console.log(result)
  })
  .catch((err)=> console.log("ERROR: CRUD operation not executed"));
}


/* Task 8 : 
  Perform Classic Updates by Running Find, Edit, then Save

  - Find a person by _id with the parameter 'personId'
  - Add "hamburger" to his 'favoriteFoods' list
  - Then save() the updated Person*/

var CRUD_Edit = (personId)=>{
  let foodToAdd = "hamburger";
  Person.findById(personId)
  .then((result)=>{
    //console.log(result)
    result.favoriteFoods.push(foodToAdd)
    //console.log("after add \n",result)
    result.save((err, data)=>{
      if(err) {
        console.log("---- ERROR: changes weren't saved ---- \n");
      }else{
        console.log(`---- Changes in \"${data.name}\" are successefully saved ----\n`)
      }
    });
  })
  .catch((err)=> console.log("ERROR: CRUD operation not executed"));
}


/* Task 9 :
  Perform updates by using model.findOneAndUpdate() method

  - Find a person by Name using a function parameter 'personName'
  - then set the person's age to 20. 
  - return the updated document using the option { new: true } as the 3rd argument to method*/

var CRUD_findOneAndUpdate = (personName)=>{
  let newAge = 20;
  Person.findOneAndUpdate({name: personName}, {age: newAge}, { new: true })
  .then((result)=>{
    console.log(result)
  })
  .catch((err)=> console.log("ERROR: CRUD operation not executed"));
}


/* Task 10 :
  Delete one Document using model.findByIdAndRemove() or findOneAndRemove() methods

  - Search a person by _id using the function argument 'personId'
  - Delete that person from database and update data*/

var CRUD_findByIdAndRemove = (personId)=>{
  Person.findByIdAndRemove(personId)
  .then((result)=>{
    console.log(`---- \"${result.name}\" is successefully deleted ----\n`)
  })
  .catch((err)=> console.log("---- ERROR: The Person isn't deleted ----\n"));
}


/* Task 11 :
  Delete Many Documents with model.remove()

  - search peopoles named "Marwen" using name field set
  - Delete all peoples using Model.remove() */

var CRUD_Remove = (personName)=>{
  Person.remove({name: personName})
  .then((result)=>{
    console.log(`---- \"${result.n}\" persons are successefully deleted ----\n`)
    console.log(result)
  })
  .catch((err)=> console.log("---- ERROR: Persons aren't deleted ----\n"));
}


/* Task 12 :
  Chain search query helpers to narrow search results
  Chain .find(), .sort(), .limit(), .select(), and .exec()

  - Find people who like 'coffee'. 
  - Sort them by name
  - Limit the results to two documents
  - Hide their age*/

var CRUD_ChainFilters = (food)=>{
  Person.find({favoriteFoods: {$all: [food]}})
  .sort({name: 'asc'})
  .limit(2)
  .select('-age')
  .exec((err, results) => {
    if(err){
      console.log("---- ERROR: Chain search query failed ----\n")
    }else{
      console.log("---- Chain search query was successful ----\n", results)
    }
  })
}

module.exports = CRUD_Task;
