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

container.addEventListener("mouseenter", (e) => {
  let target = e.target;
  console.log(target);
  //   target.style.backgroundColor = "gray";
});
