// Arrow Function
// Print odd numbers in an array
let result = (arr) => {
    let result = [];
    for (const number of arr) {
      if (number % 2 !== 0) {
        result.push(number);
      }
    }
    return result;
  };
  
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(result(arr));
  
  // convert all the strings to title caps in the string array
  let titleCaps = (cars) => {
    let newCars = cars.map((car) => car.toUpperCase());
    return newCars;
  };
  const cars = ["suzuki", "hyundai", "benz", "Volvo", "renault", "nissan"];
  console.log(titleCaps(cars));
  
  // Sum of all numbers in an array
  
  let sumArray = (sumArray1) => {
    let initialValue = sumArray1[0];
    const sumOfArray = sumArray1.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    return sumOfArray;
  };
  const sumArray1 = [1, 2, 3, 4, 5];
  console.log(sumArray(sumArray1));
  
  // Return all the prime number in an array
  let isPrime = (array) => {
    let PrimeNum = [],
      i,
      j;
    for (i = 0; i < array.length; i++) {
      if (array[i] === 1) {
        i++;
      }
      for (j = 2; j < array[i] / 2; j++) {
        if (array[i] % j === 0) {
          break;
        }
      }
      if (j >= array[i] / 2) {
        PrimeNum.push(array[i]);
      }
    }
    return PrimeNum;
  };
  
  let array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  console.log(isPrime(array));
  
  // Return all the palindrome in an array
  let palindrome = (paliArr) => {
    let testArr = [];
    paliArr = paliArr.toString().split(",");
    for (let i = 0; i < paliArr.length; i++) {
      let revStr = paliArr[i].split("").reverse().join("");
      if (paliArr[i] === revStr) {
        testArr.push(paliArr[i]);
      }
    }
    return testArr;
  };
  let palindromeArray = ["madam", "civic", "bangalore", "malayalam", 121];
  console.log(palindrome(palindromeArray));