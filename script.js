let gridSize = 16;
let container = document.querySelector(".container");
let button = document.querySelector(".gridChanger");

function makeGrid(){
    container.innerHTML = "";
    for (let i = 0; i < (gridSize*gridSize); i++) {
        let div = document.createElement("div");
        container.appendChild(div);
    }
    let divs = document.querySelectorAll(".container div");
    divs.forEach((div) => {
        div.addEventListener("mouseenter",etched);
    });
}
function etched(e){
    e.target.className = "etched";
}
button.addEventListener("click",changeGridsize);
function changeGridsize(){
    let size = prompt("Enter new size for grid");
    console.log(size);
    if(isNaN(size) || size > 100) return;
    gridSize = size;
    container.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
    makeGrid();
}

makeGrid();
