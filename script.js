// container div
const container = document.querySelector("#container");
const gridButton = document.querySelector(".grid-button");
//creates grid of square divs
function createGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let square = document.createElement("div");
      square.className = "square";
      container.appendChild(square);
    }
  }
}
createGrid(16);

// adds a grey background color to a div
container.addEventListener("mouseover", (e) => {
  e.target.classList.add("fillIn");
});

// when the grid button is clicked it sends a prompt for user input of grid size with a 100 limit

gridButton.addEventListener("click", () => {
  let gridSize;
  do {
    gridSize = prompt("What Size Grid?");
  } while (gridSize > 100);

  // remove existing grid
  container.textContent = "";
  createGrid(gridSize);
});

// create the new grid in the same total space
