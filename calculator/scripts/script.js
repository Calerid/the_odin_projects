const SCREEN = document.getElementById("screen");
const BUTTON = document.querySelectorAll(".btn");

var userInputA = "";
var userInputB = "";
var userOperator = "";

BUTTON.forEach((e) => {
  e.addEventListener("click", function () {
    storage(e);
    screenUpdate(e);
  });
});

function storage(e) {
  if ((userOperator.length == 0) && (e.value != "+" || "-" || "/" || "*")){
    userInputA += e.value;
  } else if ((userOperator.length == 1) && (e.value != "+" || "-" || "/" || "*")){
    userInputB += e.value;
  } else if ((userOperator.length == 0) && (e.value == "+" || "-" || "/" || "*")) { 
    userOperator = e.value;
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