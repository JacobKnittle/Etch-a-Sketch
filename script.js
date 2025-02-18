// container div
const container = document.querySelector("#container");

//16x16 grid of square divs
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
  }
}

// adds a grey background color to a div 
container.addEventListener("mouseover", (e) => {
  e.target.classList.add("fillIn");
  console.log(e.target);
});


// add a button to the top that sends a popup for user input of grid size with a 100 limit

// button that runs the grid creation function

// remove existing grid

// general the new grid in the same total space