let board = document.querySelector(".board");
let blockHeight = 50;
//To find columns Boardwidth / number of Width(blockWidth)
let blockWidth = 50;

//calculating cols and rows
const cols = Math.floor(board.clientWidth / blockWidth)
const rows = Math.floor(board.clientHeight / blockHeight)

let intervalId = null

const blocks = []
const snake =[
    {
        x:5 , y:4
    }
]

let food = {x: Math.floor(Math.random()*rows) , y: Math.floor(Math.random()*cols)}

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
    
    let head = null

    blocks[`${food.x}-${food.y}`].classList.add("food")

    if(direction==="left"){
        head = {x:snake[0].x , y:snake[0].y-1} 
    }else if(direction==="right"){
        head = {x:snake[0].x , y:snake[0].y+1}
    }else if(direction==="down"){
        head ={x:snake[0].x+1 ,y:snake[0].y}
    }else if(direction==="up"){
        head ={x:snake[0].x-1 ,y:snake[0].y}
    }
    
    //Game over
    if(head.x<0 || head.x >= rows || head.y<0 || head.y>=cols){
        alert("Game Over")
        clearInterval(intervalId)
    }

     
    if(head.x==food.x && head.y==food.y){
        blocks[`${food.x}-${food.y}`].classList.remove("food")
        food = {
            x: Math.floor(Math.random()*rows) , y: Math.floor(Math.random()*cols)
        }
         blocks[`${food.x}-${food.y}`].classList.add("food")
        
         snake.unshift(head)
    }


    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
        

let direction = 'up'
    })

    snake.unshift(head)
    snake.pop()
 
    snake.forEach((val,index)=>{
        blocks[`${val.x}-${val.y}`].classList.add("fill")
    })
}





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


let startGame = document.querySelector(".btn-start")
let modal = document.querySelector(".modal")

startGame.addEventListener('click',()=>{
    modal.style.display="none"
    intervalId = setInterval(() => {
    
    render()
 
}, 300);
})