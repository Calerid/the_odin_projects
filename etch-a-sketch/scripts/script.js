const gridContainer = document.getElementById("grid-container");
const gridSelect = document.getElementById("grid-value");

gridSelect.addEventListener('change', () => createGrid(gridSelect.value));

function createGrid(e){
    gridErase();
    console.log(e);
    for (let i = 0; i < e; i++){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', `${i}`)
        newDiv.setAttribute('class', 'box');
        gridContainer.appendChild(newDiv);
    }
    
}

function gridErase(){
    
}