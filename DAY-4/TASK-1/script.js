var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

//Sorting the Given JSON data obj1 and obj2
let sortObj1 = Object.keys(obj1).sort();
let sortObj2 = Object.keys(obj2).sort();

// Comparing two JSON Properties is same or not.
if (JSON.stringify(sortObj1) === JSON.stringify(sortObj2)) {
    console.log("True");
  } else {
    console.log("False");
  }