var result = 5 + 10;
var result2 = 10 + 10;
var result4 = 11 - 2;

console.log(result);
console.log(result2);
console.log(result4);
//
// // //This is a named function
function addNumbers() {
  var result = 5 + 10;
  console.log(result);
// }
// // //I'm calling the function here
addNumbers();
// //
// // // This is an anonymous function
var anonAddNumbers = function() {
  var result = 5 + 10;
  console.log(result);
}
anonAddNumbers();
//
// // my attempt at a function
function namedFunction() {
  console.log("Hello World");
}
namedFunction();

var anonNamedFunction= function() {
  console.log("Hello World");
}
anonNamedFunction();

function makeNoise() {
  alert("how annoying");
}
makeNoise();

//
// //parameters and returns
function addNumbers(number1, number2) {
  var result = number1 + number2;
  return result;
}
addNumbers(1,2);
//Can write above as this as well using returns
function addNumbers(number1, number2) {
  return number1 + number2;
}
var answer1 = addNumbers(1,3);
console.log(answer1);

//evaluating
function addNumbers(1, 3) {
  return 1 + 3;
}
addNumbers(1,3);


var

((userInput = "rock" && computerInput = "rock") || (userInput = "scissors" && computerInput = "scissors") || (userInput = "paper" && computerInput = "paper")) 
playerScore = playerScore + 1;
  computerScore = computerScore + 1;
  alert("We draw! Your score is " + playerScore + ". My score is " + computerScore);
