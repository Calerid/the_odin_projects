const SCREEN = document.getElementById("screen");
const BUTTON = document.querySelectorAll(".btn");

var inputValues = [];

BUTTON.forEach((e) => {
  e.addEventListener("click", function () {
    storage(e);
    screenUpdate(e);
  });
});

//Think about implementing a queue that pulls the first object
// that was entered. This will then be evaluated for number vs
// operator.

function storage(e) {
  inputValues.push(e.value);
  if (inputValues.length >= 2){
  checkValue(inputValues);
  }
}

function screenUpdate(e) {
    let addToScreen = document.createTextNode(e.value);
    SCREEN.textContent 
}

function checkValue(inputValues){
    if (inputValues[inputValues.length-2] === '+'){
        addition(inputValues)
    } else if (inputValues[inputValues.length-2] === '-'){
        subtraction(inputValues)
    } else if (inputValues[inputValues.length-2] === '/'){
        division(inputValues)
    } else if (inputValues[inputValues.length-2] ==='*'){
        multiplication(inputValues)
    } else if (inputValues[inputValues.length-2] === "."){
        decimal(inputValues)
}
}
function addition(inputValues){
    console.log(inputValues[inputValues.length-2]);
}
function subtraction(inputValues){
    console.log(inputValues[inputValues.length-2]);
}
function division(inputValues){
    console.log(inputValues[inputValues.length-2]);
}
function multiplication(inputValues){
    console.log(inputValues[inputValues.length-2]);
}
function decimal(inputValues){
    console.log(inputValues[inputValues.length-2]);
}
