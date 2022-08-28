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
    
}

function gridErase(){
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}