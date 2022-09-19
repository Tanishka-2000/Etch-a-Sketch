let gridSize = 16;
let container = document.querySelector(".container");
let button = document.querySelector(".gridChanger");
let etch = false;

// add divs to container dynamically and change their bgcolor on hover
function makeGrid(){
    container.innerHTML = "";
    for (let i = 0; i < (gridSize*gridSize); i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseenter",etched);
        div.addEventListener("mousedown",startEtch);
        div.addEventListener("mouseup",stopEtch);
        container.appendChild(div);
    }
    // let divs = document.querySelectorAll(".container div");
    // divs.forEach((div) => {
    //     div.addEventListener("mouseenter",etched);
    // });
}
// container.addEventListener('dblClick',function(){
//     console.log('double clicked');
//     classToAdd = classToAdd === 'etched' ? 'etched' : '';
// });
//function to change bgcolor by adding class

const startEtch = () => etch = true;

const stopEtch = () => etch = false;

function etched(e){
    e.target.className = etch ? 'etched' : '';
}
button.addEventListener("click",changeGridsize);

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
