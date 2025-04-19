function getComputerChoice(){
    let arr = ["rock","paper","scissors"]
    let randomIndex= Math.floor(Math.random()* arr.length)
    return arr[randomIndex]
}
function getHumanChoice(){
    let choice = prompt("Choose between rock, paper, scissors!!!")
    return choice
}

let humanScore = 0
let computerScore = 0
function playRound(humanChoice,computerChoice){
    if(computerScore+humanScore  == 5){
        if (humanScore > computerScore){
            alert("HUMAN WINS THE GAME!")
            return
        }
        else{
            alert("COMPUTER WINS THE GAME!")
            return
        }   
    }
    computerChoice = getComputerChoice()
    document.querySelector(".score").textContent = ""
    if (humanChoice.toLowerCase() == computerChoice){
        alert("is a tie")
    }
    else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors" || humanChoice.toLowerCase() == "paper" && computerChoice == "rock"
||humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){ 
        humanScore += 1
        document.querySelector(".playerScore").textContent = humanScore
    }
    else{
        computerScore +=1
        document.querySelector(".compScore").textContent = computerScore
    }
}


const rockButton = document.querySelector(".rock")
rockButton.addEventListener("click",()=>{
    playRound("rock")
})  
const paperButton = document.querySelector(".paper")
paperButton.addEventListener("click",()=>{
    playRound("paper")
})
const scissorsButton = document.querySelector(".scissors")
scissorsButton.addEventListener("click",()=>{
    playRound("scissors")
})
const newGame = document.querySelector(".start")
newGame.addEventListener("click",()=>{
    computerScore=0
    humanScore=0
    document.querySelector(".playerScore").textContent = humanScore
    document.querySelector(".compScore").textContent = computerScore

})