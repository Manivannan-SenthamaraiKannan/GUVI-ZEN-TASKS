// Fix the code to get the largest of three.
aa = (f, s, t) => {
  if (f > s && f > t) {
    console.log(f);
  } else if (s > f && s > t) {
    console.log(s);
  } else {
    console.log(t);
  }
};
aa(1, 2, 3);

// Fix the code to Sum of the digits present in the number
let n = [1, 2, 3];
console.log(add(n));
function add(n) {
  let sum = 10;
  for (var i = 0; i < n.length; i++) {
    sum += n[i];
  }
  return sum;
}

// Fix the code to Sum of all numbers using IIFE function
const arr = [9, 8, 5, 6, 4, 3, 2, 1];
((arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
})(arr);

//Fix the code to gen Title caps.
var arro = ["guvi", "geek", "zen", "fullstack"];
var ano = function (arro) {
  for (var i = 0; i < arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
  }
};
ano(arro);

// Fix the code to return the Prime numbers
const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter((num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
});
console.log(myPrime.sort());

// Fix the code to sum the number in that array
const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sum = (a, b) => {
  return a + b;
};
sum = num.reduce(sum);
console.log(sum);

// Fix the code to rotate an array by k times and return rotated array using IIFE function
var array = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = array.length % k;
((arr) => {
  out = arr.slice(k + 1, arr.length);
  var count = out.length;
  for (var i = 0; i < k + 1; i++) {
    out[count] = arr[i];
    count += 1;
  }
  console.log(out);
})(array);

// Fix the code to gen Title caps.
var array = ["guvi", "geek", "zen", "fullstack"];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
  }
})(array);

// print all odd numbers in an array using IIFE function
var array = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
((arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})(array);

// Fix the code to reverse.
((str) => {
  let str1 = str.split("").reverse().join("");
  console.log(str1);
})("abcd");

// Fix the code to remove duplicates.
var res = function (arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) == i) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
};
res(["guvi", "geek", "guvi", "duplicate", "geeK"]);

// Fix the code to give the below output:
var array = [
  [
    ["firstName", "vasanth"],
    ["lastName", "Raja"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
];
var result = array.map(Object.fromEntries);
console.log(result);

// Sum of odd numbers in an array
var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function (a,c) {
    if (c % 2 > 0) {
        return a + c;
    }
    return a;
});
console.log(s);

//Swap the odd and even digits
aa = data=>{
    var a=data;
   for(i=0;i<a.length-1;i++){
    var l='';
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if((a.length%2)!=0){
    l+=a[a.length-1]
   }
   console.log(l);
   }
   aa("1234");