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
    }
]
let direction = 'up'

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

setInterval(() => {
    
    let head = null

    if(direction==="left"){
        head = {x:snake[0].x , y:snake[0].y-1} 
    }else if(direction==="right"){
        head = {x:snake[0].x , y:snake[0].y+1}
    }else if(direction==="down"){
        head ={x:snake[0].x+1 ,y:snake[0].y}
    }else if(direction==="up"){
        head ={x:snake[0].x-1 ,y:snake[0].y}
    }
    
    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
    })

    snake.unshift(head)
    snake.pop()

    render()
}, 400);

addEventListener("keydown",(event)=>{
    if(event.key === "ArrowUp"){
        direction="up"
    }else if(event.key ==="ArrowRight"){
        direction="right"
    }else if(event.key ==="ArrowLeft"){
        direction="left"
    }else if(event.key ==="ArrowDown"){
        direction="down"
    }
})