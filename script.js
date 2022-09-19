let gridSize = 16;
let container = document.querySelector(".container");
let gridChanger = document.querySelector(".gridChanger");
let eraser = document.querySelector(".eraser");
let clear = document.querySelector(".clear");
let colorPicker = document.querySelector("input[type='color']");
let etch = false;
let color  = '#557174';

// add divs to container dynamically and change their bgcolor on hover
function makeGrid(){
    container.innerHTML = "";
    for (let i = 0; i < (gridSize*gridSize); i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseenter", etched);
        div.addEventListener("mousedown", startEtch);
        div.addEventListener("mouseup", stopEtch);
        container.appendChild(div);
    }
}

const startEtch = () => etch = true;

const stopEtch = () => etch = false;

function etched(e){
    if(etch) e.target.style.backgroundColor = color;
}
gridChanger.addEventListener("click",changeGridsize);
// eraser.addEventListener('click', function(){
//
// });
colorPicker.addEventListener('input',function(e){
    console.log(e.target.value);
    color = e.target.value;
})

//function to change grid size based on user input
function changeGridsize(){
    let size = prompt("Enter new size for grid");
    // console.log(size);
    if(isNaN(size) || size > 100) return;
    gridSize = size;

    // update grid template based on user input
    container.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize},1fr)`;

    makeGrid();
}

makeGrid();
