// container div
const container = document.querySelector("#container");

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
  console.log(e.target);
});

// add a button to the top that sends a popup for user input of grid size with a 100 limit

// button that runs the grid creation function

// remove existing grid

// general the new grid in the same total space
