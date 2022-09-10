const SCREEN = document.getElementById("screen");
const BUTTON = document.querySelectorAll(".btn");

var inputValues = [];

BUTTON.forEach((e) => {
  e.addEventListener("click", function () {
    storage(e);
    screenUpdate(e);
  });
});

function storage(e) {
  inputValues.push(e.value);
  if (inputValues.length >= 2) {
    checkValue(inputValues);
  }
}

function screenUpdate(e) {}


