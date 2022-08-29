const gridContainer = document.getElementById("grid-container");
const gridSelect = document.getElementById("grid-value");

gridSelect.addEventListener("change", () => createGrid(gridSelect.value));

deployDefaultGrid();

function deployDefaultGrid() {
  for (i = 1; i <= 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", `${i}`);
    newDiv.setAttribute("class", "box");
    newDiv.textContent = `${i}`;
    gridContainer.appendChild(newDiv);
    setGridSize()
  }
}

function createGrid(e) {
  console.log(e);
  gridErase();
  for (let i = 1; i <= e; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", `${i}`);
    newDiv.setAttribute("class", "box");
    newDiv.textContent = `${i}`;
    gridContainer.appendChild(newDiv);
  }
  setGridSize();
}

function changeColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function gridErase() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

setInterval(() => {
  let newBox = gridContainer.querySelectorAll(".box");
  newBox.forEach((box) =>
    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = `${changeColor()}`;
    })
  );
}, 500);

function setGridSize() {
  let newBox = gridContainer.querySelectorAll(".box");
  if (newBox.length == 256) {
    newBox.forEach((box) => box.style.width = '60px')
  } else if (newBox.length == 128) {
    newBox.forEach((box) => box.style.width = '60px')
    newBox.forEach((box) => box.style.height = '120px')
  } else if (newBox.length == 64) {
    newBox.forEach((box) => box.style.width = '60px')
    newBox.forEach((box) => box.style.height = '240px')
  } else if (newBox.length == 32) {
    newBox.forEach((box) => box.style.width = '60px')
    newBox.forEach((box) => box.style.height = '480px')
  } else if (newBox.length == 16) {
    newBox.forEach((box) => box.style.width = '60px')
    newBox.forEach((box) => box.style.height = '960px')
  }
}
