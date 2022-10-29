// 1.Write a loop that makes seven calls to console.log to output the following triangle:
let triangle = "";
for (let i = 0; i < 7; i++) {
  triangle = triangle + "#";
  console.log(triangle);
}

// 2.Iterate through the string array and print it contents
var strArray = [
  "<option>Jazz</option>",
  ,
  "<option>Blues</option>",
  ,
  "<option>New Age</option>",
  ,
  "<option>Classical</option>",
  ,
  "<option>Opera</option>",
];
for (let j = 0; j < strArray.length; j++) {
  console.log(strArray[j]);
}
// 3.write a code to count the elements in the array . Don’t use length property
var myArray = [11, 22, 33, 44, 55];
let length = 0;
for (let j in myArray) {
  length++;
}
console.log(length);

// 4.Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
// Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
let foods = [
  "Madra",
  "IrachiIshtu",
  "MakkiRoti",
  "DaabChingri",
  "Thalipeeth",
  "Rasa",
  "Sambhar",
  "Rice",
  "Chapathi",
  "Pongal",
  "Vada",
  "tandoori",
  "PaneerManchurian",
  "PaneerTikka",
  "ChickenGravy",
  "Naan",
  "PaniPuri",
  "MasalaPuri",
  "DahiPuri",
  "BhelPuri",
];
console.log(
  `Length of food Array id:${foods.length}, Fifth favourite food is:${foods[4]}`
);

// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    if (friends[0] === input[i]) {
      friends.splice(0, 0, "Munnabai");
    }
  }
}

dataHandling(friends);