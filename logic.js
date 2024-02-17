const container = document.querySelector(".container");

// Function to create the grid
function createGrid(size) {
  // Limit size to 100
  if (size > 100) {
    alert("Grid square max to 100!");
    return;
  }

  container.style.setProperty('--size', size);

  // Clear the container by removing all child nodes
  container.innerHTML = '';

  // Create the new grid  
  for (let i = 0; i < size; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");

    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      grid.appendChild(square);
    }

    container.appendChild(grid);
  }

  // Add event listeners to new squares
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      square.style.backgroundColor = randomColor;
    });
  });
}

// Initial grid creation
createGrid(16);

// Button event listener
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const size = parseInt(prompt("How much grid square per side do you want ?"));
  createGrid(size);
});