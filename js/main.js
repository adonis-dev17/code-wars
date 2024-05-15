//1.  DESCRIPTION:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// My Solution:
function numberToString(num) {
  // Return a string of the number here!
  return String(num);
}

// Other Solutions:

function numberToString(num) {
  return num.toString();
}

// 
const numberToString = num => `${num}`;

// 
function numberToString(num) {
  return ''+num;
}

// 2. DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9.

// My Solution: 
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}

// Other Solutions: 
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

// 
function squareSum(numbers){
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += (numbers[i] * numbers[i]);
  }
  return result;
}

// 
const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0)
