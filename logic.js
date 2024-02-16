const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid")

  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("square")
    grid.appendChild(square);    
  }

  container.appendChild(grid)
}

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "green";
  });

});