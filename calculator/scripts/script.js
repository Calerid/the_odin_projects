const SCREEN = document.getElementById("screen");
const BUTTON = document.querySelectorAll(".btn");

var inputValues = [];

BUTTON.forEach((e) => {
    e.addEventListener('click', function(){
        storage(e);
    });
});

function storage(e){
    inputValues.push(e.value);
}