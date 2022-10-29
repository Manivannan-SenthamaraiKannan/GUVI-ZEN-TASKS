// // What the output
// myobject = { 1: one, 11: 1, name: "arun" };
// console.log(myobject.eleven);
// console.log(myobject.name);
// //  The out put is Error, because one is not defined and object.11 is not a proper key.

// // Add a new key value pair to myobject
// myobject = { 1: one, 11: 1, name: "arun" };
// //your code goes here
// Object.assign(myobject, { ten: ten });
// console.log(myobject);

// Write out an object literal to represent the data below.
let objectLiterals = {
    name: "Guvi",
    Sname: "Geeks",
    address: "IIT-M RP",
    location: "chennai",
  };
  console.log(JSON.parse(objectLiterals));
  
  // strategy.
  // 1.Convert the whole thing into objectLiterals.
  // 2.Json.stringify.