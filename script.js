let board = document.querySelector(".board");
let blockHeight = 30;
//To find columns Boardwidth / number of Width(blockWidth)
let blockWidth = 30;

//calculating cols and rows
const cols = Math.floor(board.clientWidth / blockWidth)
const rows = Math.floor(board.clientHeight / blockHeight)

// creating blocks
for(let i = 0; i< rows*cols; i++){
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
}