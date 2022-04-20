let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restart')
let gameboard = document.getElementById("gameboard")
let boxes = Array.from(document.getElementsByClassName('box'))


let O_TEXT = "O"
let X_TEXT = "X"
let current_player = X_TEXT
let spaces = Array(9).fill(null)



const startGame = () =>{
boxes.forEach(box=>
    box.addEventListener("click",clickedBox)
    )
}


const clickedBox =(e)=>{
   const id = e.target.id
   if(!spaces[id]){
       spaces[id]=current_player
       e.target.innerHTML = current_player
       if(playerHasWon() !==false){
           playerText.innerText = `${current_player} has won`
           const winningArrayBlocks = playerHasWon()
           winningArrayBlocks.map(box=>boxes[box].style.backgroundColor ='rgb(45, 45, 45)')
        }
        current_player = current_player === X_TEXT ? O_TEXT : X_TEXT
   }


}

const winningCombos =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


function playerHasWon (){
     for (const condition of winningCombos) {
         const [a,b,c] = condition
         if(spaces[a] && (spaces[a]== spaces[b] && spaces[a]==spaces[c])){
             return [a,b,c]
            }
        }
        return false
}


// restart game
const restartGame =()=>{
   spaces.fill(null)
   playerText.innerText =" TIC TAC TOE"
   boxes.forEach(box=>
    box.innerHTML =''
    )
    current_player=X_TEXT
    boxes.forEach(box=>box.style.backgroundColor = '#111')
}


restartBtn.addEventListener("click", restartGame)
startGame()