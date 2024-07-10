// Question 1 - add two numbers

// function addition(num1, num2) {
//     return num1 + num2;
// }

// let sum = addition(7, 3)
// console.log('The sum is ', sum)

// question 2 - convert hours into seconds

// 
// function hoursIntoSeconds(hour) {
//     return hour * 3600;
// }


// console.log(hoursIntoSeconds(24));

// Question 3 - Calculate the perimeter of a rectangle

// function calcPerimeter(length, width) {
//     return (length * 2) + (width * 2);
// }

// console.log(calcPerimeter(2, 9))

// question 4 - calculate area of a triangle

// function calcTriangleArea(base, height) {
//     return base * height * .5;
// }

// console.log(calcTriangleArea(20, 20));

// Question 5 - Extend a string

// function extendString(string) {
//     return string + "Frontend"
// }

// console.log(extendString('Orange'))

// Question 6 - Greater than 100?

// Because a mathematical statement returns a boolean
// an if statement is not necessary

// function sumGreaterThan100(num1, num2){
//     return num1 + num2 > 100
// }

// console.log(sumGreaterThan100(50, 53))

// Question 7 - less than or equal to zero?

// function lessThanOrEqualToZero (num1) {
//     return num1 <= 0
// }

// console.log(lessThanOrEqualToZero(0))

// Question 8 - Opposite boolean

// function oppositeBoolean(bool) {
//     return !bool;
// }

// console.log(oppositeBoolean(false));

// Question 9 - is not the number 0

// function isNotZero(num1) {
//     return num1 !== 0;
// }

// console.log(isNotZero(5))

// Question 10 - Calculate the remainder

// function calcRemainder(num1, num2) {
//     return num1 % num2;
// }

// console.log(calcRemainder(9, 8));

// Question 11 - Is the number odd?

// function isNumberOdd(num) {
//     return num % 2 !== 0;
// }

// console.log(isNumberOdd(6))

// Question 12 - If a number is even, return 1, othwerwise return -1

function booleanInteger(num) {
    // if (num % 2 === 0) {
    // return 1
    // }
    // return -1

    return (num % 2 === 0) ? 1 : -1 // streamlined
}

console.log(booleanInteger(4) )