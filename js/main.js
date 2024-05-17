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
The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output

function takesThreeArguments(operator, value1, value2) {
  return eval(value1  + operator +  value2);
}

var result = takesThreeArguments('+', 4, 7);
console.log(result);