let gridSize = 16;
let container = document.querySelector(".container");
for (let i = 0; i < (gridSize*gridSize); i++) {
    let div = document.createElement("div");
    container.appendChild(div);
}
let divs = document.querySelectorAll(".container div");
divs.forEach((div) => {
    div.addEventListener("mouseenter",etched);
});
function etched(e){
    e.target.className = "etched";
}
