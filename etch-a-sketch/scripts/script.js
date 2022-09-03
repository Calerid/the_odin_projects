const gridContainer = document.getElementById("grid-container");
const gridSelect = document.getElementById("grid-value");

gridSelect.addEventListener("change", () => createGrid(gridSelect.value));

deployDefaultGrid();

// deployDefaultGrid() places 16 boxes on the display at page load. 
// The new divs are given a new id with the current itherator value.
// All new divs are given the class name of 'box'.
// the divs are then appended to gridContainer.

function deployDefaultGrid() {
  for (i = 1; i <= 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", `${i}`);
    newDiv.setAttribute("class", "box");
    gridContainer.appendChild(newDiv);
    setGridSize()
  }
}

// createGrid() utilizes the user selection for how many divs will be created.
// functions performs same action as deployDefaultGrid()

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

// changeColor() creates a random color each time it is called in hex format. 
// color is passed to an eventlistener which is applied to each div which is a child of gridContainer.

function changeColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// gridErase() removes all divs from gridContainer.

function gridErase() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

// this is the event listener which monitors the gridContainer. 
// It is set as an interval so that it constantly checks for updates at 500ms  - otherwise it will not see new nodes added to gridContainer.
// forEach is applied to generate a nodelist which is then given an event listener at each element. On mouseover changeColor() is called on the style.backgroundColor 

setInterval(() => {
  let newBox = gridContainer.querySelectorAll(".box");
  newBox.forEach((box) =>
    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = `${changeColor()}`;
    })
  );
}, 500);

//setGridSize() updates the box.style.height for the class of .box. This is so that each div remains within the confines of gridContainer.

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
