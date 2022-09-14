const SCREEN = document.getElementById("screen");
const BUTTON = document.querySelectorAll(".btn");

var userInput = [];

BUTTON.forEach((e) => {
  e.addEventListener("click", function () {
    storage(e);
    screenUpdate(e);
  });
});

function storage(e) {
  userInput.push(e.value);
  if (inputValues.length >= 2) {
    operate(userInput);
  }
}

function screenUpdate(e) {}

function operate(userInput, operator){
}

function add(a, b){
  return (a + b);
}
function subtract(a, b){
  return (a - b);
}
function multiply(a, b){
  return (a * b);
}
function divide(a, b){
  return (a / b);
}