const gridContainer = document.getElementById("grid-container");
const gridSelect = document.getElementById("grid-value");

gridSelect.addEventListener('change', () => createGrid(gridSelect.value));

deployDefaultGrid();

function deployDefaultGrid(){
    for (i = 1; i <= 16; i++){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', `${i}`)
        newDiv.setAttribute('class', 'box');
        newDiv.textContent = `${i}`;
        gridContainer.appendChild(newDiv);
    }
}

function createGrid(e){
    console.log(e);
    gridErase();
    for (let i = 1; i <= e; i++){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', `${i}`)
        newDiv.setAttribute('class', 'box');
        newDiv.textContent = `${i}`;
        gridContainer.appendChild(newDiv);
    }
    return newBox = document.querySelectorAll('.box');
}

function changeColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function gridErase(){
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

setInterval(() =>{
let newBox = gridContainer.querySelectorAll('.box');
newBox.forEach(box => box.addEventListener('mouseover', function(){
    box.style.backgroundColor = `${changeColor()}`;
}) )
}, 500);