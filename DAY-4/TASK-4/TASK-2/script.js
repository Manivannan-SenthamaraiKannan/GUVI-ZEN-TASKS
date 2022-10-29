// 1.Square of a number
let square = 2;

let results = square * square;
console.log(results);

// 2.Swapping two numbers
let num1 = 10;
let num2 = 20;
[num1, num2] = [num2, num1];
console.log(num1, num2);

//3.Addition of 3 numbers
let add1 = 10;
let add2 = 20;
let add3 = 30;
let result = add1 + add2 + add3;
console.log(result);

//4. Celsius to Fahrenheit conversion

let degCelsius = 40;
let Fahrenheit = 0;

Fahrenheit = degCelsius * (9 / 5) + 32;
console.log(Fahrenheit);

//5. Meter to miles
let meter = 50;
let miles = 0;
miles = meter * 0.000621371;
console.log(miles);

//6. Pounds to Kgs
let pounds = 25;
let kgs = 0;
kgs = pounds / 2.2046;
console.log(kgs);

//7.Calculate Batting Average
let runScored = 522;
let timesOut = 27;
let battingAverage = 0;
battingAverage = runScored / timesOut;
console.log(battingAverage);

//8. Calculate five test scores and print their average
let testScores = [80, 70, 83, 88, 90];
let avg = 0;
let final = 0;
for (let j = 0; j < testScores.length; j++) {
  final = final + testScores[j];
  avg = final / testScores.length;
}
console.log(avg);

// 9.Power of any number x ^ y.
let x = 5;
console.log(Math.pow(x, 3));

//10. Calculate Simple Interest
let p = 100;
let r = 7.5;
let t = 2;
let SI = 0;
SI = (p * r * t) / 100;
console.log(SI);

//11.Calculate area of an equilateral triangle
let equilateral = 20;
let area = 0;
area = (Math.sqrt(3) / 4) * Math.pow(equilateral, 2);
console.log(area);

//12.Area Of Isosceles Triangle
let base = 20;
let height = 20;
let isoscelesArea = 0;
isoscelesArea = (base * height) / 2;
console.log(isoscelesArea);

//13. Volume Of Sphere
let radius = 30;
let volume = 0;
volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
console.log(volume);

// 14. volume of a prism
let baseValue = 20;
let valueHeight = 35;
let volumeOfPrism = (1 * baseValue * valueHeight) / 2;
console.log(volumeOfPrism);

// 15.Find area of a triangle.
let triangleBase = 10;
let triangleHeight = 15;
let areaOfTriangle = 0;
areaOfTriangle = (1 / 2) * (triangleBase * triangleHeight);
console.log(areaOfTriangle);

// 16. Give the Actual cost and Sold cost, Calculate Discount Of Product
let actualCost = 839;
let soldCost = 639;
let discount = 0;
discount = actualCost - soldCost;
console.log(discount);
// discount%
// discount = (actualCost-soldCost) / actualCost * 100;
// console.log(discount);

//17.Given their radius of a circle and find its diameter, circumference and area.
let circleRadius = 10;
let circleDia = 0;
let circumference = 0;
let circleArea = 0;
circleDia = 2 * circleRadius;
circumference = 2 * Math.PI * circleRadius;
circleArea = Math.PI * Math.pow(circleRadius, 2);
console.log(circleDia);
console.log(circumference);
console.log(circleArea);

//18.Given two numbers and perform all arithmetic operations.

let number1 = 10;
let number2 = 10;
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);
console.log(number1 ** number2);

//19.Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");

//20.Calculate electricity bill?For example, a consumer consumes 100 watts per hour daily for one month.
// Calculate the total energy bill of that consumer if per unit rate is 10?
let perUnitRate = 10;
let watts = 100;
let perHourDailyOneMonth = watts * 730.008;
let energyBill = 0;
energyBill = perHourDailyOneMonth * perUnitRate;
console.log(energyBill);