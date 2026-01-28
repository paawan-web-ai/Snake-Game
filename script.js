let board = document.querySelector(".board");
let blockHeight = 50;
//To find columns Boardwidth / number of Width(blockWidth)
let blockWidth = 50;

//calculating cols and rows
const cols = Math.floor(board.clientWidth / blockWidth)
const rows = Math.floor(board.clientHeight / blockHeight)

const blocks = []
const snake =[
    {
        x:1 , y:3
    },
    {
        x:1 , y:4
    },
    {
        x:1 , y:5
    },
]


for(let row = 0; row<rows; row++ ){
    for(let col = 0; col<cols; col++){
        const block = document.createElement("div");
        block.classList.add("block");
        board.appendChild(block)
        block.innerText = `${row}-${col}`
        // blocks.push(block)
        blocks[`${row}-${col}`] = block
    }
}

function render(){
   snake.forEach((val,index)=>{
   const box =blocks[`${val.x}-${val.y}`].classList.add("fill")
   })
}