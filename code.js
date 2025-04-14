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
    while(computerScore + humanScore <5){
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        console.log(humanChoice)
        console.log(computerChoice)
        if (humanChoice.toLowerCase() == computerChoice){
        console.log("It is a tie")
        }
        else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors" || humanChoice.toLowerCase() == "paper" && computerChoice == "rock"
    ||humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){
            console.log("human wins round!") 
            humanScore += 1
        }
        else{
            console.log("computer wins round")
            computerScore +=1
        }
        console.log(`computer score = ${computerScore}`)
        console.log(`human score: ${humanScore}`)
    }
    if (humanScore > computerScore){
        console.log("HUMAN WINS THE GAME!")
    }
    else{
        console.log("COMPUTER WINS THE GAME!")
    }
}
playRound()