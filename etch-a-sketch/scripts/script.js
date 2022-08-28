const gridContainer = document.getElementById("grid-container");
const gridSelect = document.getElementById("grid-value");

gridSelect.addEventListener('change', () => createGrid(gridSelect.value));

function createGrid(e){
    console.log(e);
    for (let i = 0; i <= e; i++){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', `${i}`)
        newDiv.setAttribute('class', 'box');
        newDiv.textContent = `${i}`;
        gridContainer.appendChild(newDiv);
    }
    
}

function gridErase(){
    gridContainer.forEach(gridContainer.removeChild())
}