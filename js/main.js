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