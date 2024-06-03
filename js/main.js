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

// 3. Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

//Solution:
function hoopCount (n) {
  //your code goes here    
 if (n >= 10) {
     return 'Great, now move on to tricks'
 } else {
   return 'Keep at it until you get it'
 }
 return n;
}

Other:
function hoopCount (n) {
  return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}

// 4. Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]
// The websites array has already been defined for you using the following code:
// var websites = [];

//My Solution:
websites[websites.length] = 'codewars';

//Other:
websites.push('codewars');

// 5. Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
// My Solution: 
function removeExclamationMarks(s) {
  const newS = s.replace(/!/g, "");
  return newS;
}

// Other Solution:
const removeExclamationMarks = s => s.replace(/!/g,"") ;

//6. Write a function that will add spaces inside the string. Example: 'toy' = t' 'o' 'y.

function textSpacer(str1) {
  let newStr='';
  for(let i=0; i<str1.length;i++){
    if (str1[i] == str1[str1.length-1]) {
      newStr += str1[i]
    }else {
      newStr += str1[i] + " ";
    }
  }
  console.log(newStr);
}
textSpacer('Boyish');

// 7. The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output

function takesThreeArguments(operator, value1, value2) {
  switch (operator) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    case '%':
      return value1 % value2;
    default:
      return 'Invalid operator';
  }
}

var result = takesThreeArguments('+', 4, 7);
console.log(result);

// 8. Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!

let aria = ['The', 'Lord', 'is', 'my', 'sheperd.'];
function arraySmashIntoSentence(arr1) {
  let newArr1 = [];
  
  for(let i=0; i<arr1.length;i++){
    if (arr1[i] == arr1[arr1.length-1]) {
      newArr1 += arr1[i]
    }else {
      newArr1 += arr1[i] + "  ";
    }
  }
  return sentence.trim(); // trim() to remove any extra space at the end
}
console.log(smash(verbo));

//9. The cockroach is one of the fastest insects. 
// Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeedConversion(speed) {
  if(speed >= 0) {
    let convertedSpeed;
    convertedSpeed = Math.floor(speed * 27.7778);
    return `${convertedSpeed} cm/s`
  } else {
    console.log('Please enter real numbers.')
  } 
}

// Clever Solution
const cockroachSpeed = s => Math.floor(s / 0.036);

// Clever
const cockroachSpeed = s => 
  s / 3.6e-2 ^ 0;


// 9. Complete the solution so that it reverses the string passed into it.

function solution(str){
  return str.split('').reverse().join('');
}

//10. Make an array of dogs and reverse them alphabetically
let dogs = ['Bulldog', 'Pug', 'Dalmatian', 'Chihuahua', 'Havanese', 'Maltese', 'Pug'];
dogs.sort().reverse();


//. 11 Complete the function that takes a non-negative integer n as input, 
// and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n) {
  let results = []; 
  let result = 1;
  if (n==0) {
    results.push(result);
  } else {
    results.push(result);
    for (let i=1; i<=n; i++) {
      result = result * 2;
      results.push(result);
    } 
  }
  console.log(results);
}
powersOfTwo(0);

// Clever Solution
function powersOfTwo(n){
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}


// 12. Given an array of integers your solution should find the smallest integer.

function findSmallestInt(arr) {
  //your code here
  let minVal = Math.min(...arr);
  console.log(minVal);
  return 0;
}
findSmallestInt([34, 15, 88, 2]);
findSmallestInt([34, -345, -1, 100]);

// Other option

let minValue = Math.min.apply(null, arr);

//13.Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truthy, func1 should be called, otherwise call the func2.
let test = 0;

function _if (bool, func1, func2) {
  bool ? func1() : func2();
}

function func1() {
  console.log('True');
}

function func2() {
  console.log('False');
}

_if(test, func1, func2);

//14

function invertValues(n) {
  for(let i=0; i<n.length; i++) {
    if (n[0] > o) {
      n
    }
  }
}

//14. You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
function mergeArrays(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return [];
  }
    const combinedArrays = [...arr1, ...arr2];
    combinedArrays.sort((a, b) => a-b);
    const finalSet = new Set(combinedArrays);
    return Array.from(finalSet);
  }
// Clever
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}

// 15. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

let boolToWord = bool =>  bool ? 'Yes' : 'No';

// 16. Logs odd or even numbers in an array.

const nums = [2, 5, 6, 11];

const oddOrEven = nums.map(x => (
 x%2 === 0 ? 'Even' :  'Odd'
));

console.log(oddOrEven);

