let gridSize = 16;
let container = document.querySelector(".container");
for (let i = 0; i < (gridSize*gridSize); i++) {
    let div = document.createElement("div");
    container.appendChild(div);
}
