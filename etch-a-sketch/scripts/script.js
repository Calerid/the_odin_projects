const gridContainer = document.getElementById("grid-container");
const gridSelect = document.getElementById("grid-value");

gridSelect.addEventListener("change", () => createGrid(gridSelect.value));

deployDefaultGrid();

function deployDefaultGrid() {
  for (i = 1; i <= 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", `${i}`);
    newDiv.setAttribute("class", "box");
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
  if (newBox.length == 1024) {
    newBox.forEach((box) => box.style.height = '11.25px')
  } else if (newBox.length == 512) {
    newBox.forEach((box) => box.style.height = '22.5px')
  } else if (newBox.length == 256) {
    newBox.forEach((box) => box.style.width = '45px')
    newBox.forEach((box) => box.style.height = '45px')
  } else if (newBox.length == 128) {
    newBox.forEach((box) => box.style.width = '60px')
    newBox.forEach((box) => box.style.height = '90px')
  } else if (newBox.length == 64) {
    newBox.forEach((box) => box.style.width = '60px')
    newBox.forEach((box) => box.style.height = '180px')
  } else if (newBox.length == 32) {
    newBox.forEach((box) => box.style.width = '60px')
    newBox.forEach((box) => box.style.height = '360px')
  } else if (newBox.length == 16) {
    newBox.forEach((box) => box.style.width = '60px')
    newBox.forEach((box) => box.style.height = '720px')
  }
}
