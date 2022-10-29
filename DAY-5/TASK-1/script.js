//1. ANONYMOUS AND IIFE FUNCTION
// a. Print odd number in an array
(() => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (const number of array) {
      if (number % 2 !== 0) console.log(number);
    }
  })();
  
  // // convert all the strings to title caps in the string array
  (() => {
    const cars = ["suzuki", "hyundai", "benz", "Volvo", "renault", "nissan"];
    let titleCaps = cars.map((String) => String.toUpperCase());
    console.log(titleCaps);
  })();
  
  // // Sum of all numbers in an array
  
  (() => {
    const sumArray1 = [1, 2, 3, 4, 5];
    let initialValue = sumArray1[0];
    const sumOfArray = sumArray1.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    console.log(sumOfArray);
  })();
  
  // // Return all the prime number in an array
  ((n) => {
    let array = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    function isPrime(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }
    console.log(
      `Prime Numbers in array are:${array.filter((num) => isPrime(num))}`
    );
  })();
  
  // Return all the palindrome in an array
  ((paliArr) => {
    let testArr = [];
    paliArr = paliArr.toString().split(",");
    for (let i = 0; i < paliArr.length; i++) {
      let revStr = paliArr[i].split("").reverse().join("");
      if (paliArr[i] === revStr) {
        testArr.push(paliArr[i]);
      }
    }
    console.log(testArr);
  })(["madam", "civic", "bangalore", "malayalam"]);
  
  // Median of two sorted arrays
  (() => {
    let ar1 = [1, 2, 3, 4, 5];
    let ar2 = [10, 9, 8, 7, 6];
    let ar3 = ar1.concat(ar2).sort(function (a, b) {
      return a - b;
    });
    console.log(ar3);
    const len = ar3.length;
    if (len % 2 === 1) {
      console.log(ar3[len / 2 - 0.5]);
    } else {
      console.log((ar3[len / 2] + ar3[len / 2 - 1]) / 2);
    }
  })();
  
  // Remove duplicates from an array
  (() => {
    let chars = ["A", "B", "A", "C", "B"];
    let uniChars = chars.filter((d, index) => {
      return chars.indexOf(d) === index;
    });
    console.log(uniChars);
  })();
  
  //Rotate an array by k times
  (() => {
    // let arr = array.toString().split(",");
    // let k = 2;
    array = ["madam", "civic", "bangalore", "malayalam"];
    let k = 2;
    for (let i = 0; i < k; i++) {
      array.unshift(array.pop());
    }
    console.log(array);
  })();