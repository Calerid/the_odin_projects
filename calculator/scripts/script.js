const SCREEN = document.getElementById("screen");
const BUTTON = document.querySelectorAll(".btn");

BUTTON.forEach((e) => {
    e.addEventListener('click', function(){
        console.log(e);
    });
});
