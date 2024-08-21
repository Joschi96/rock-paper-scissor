// Returns a random Computer Choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

// Returns the Human Choice by input
// Valid inputs are "rock", "paper" and scissors
function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    if (humanChoice=="rock"||humanChoice=="paper"|| humanChoice=="scissors") {
        return console.log(humanChoice);
    } else{
        alert("Wrong input. Please choose one of the valid choices!");
        getHumanChoice();
    }
}

//getHumanChoice();
//getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice=== computerChoice) {
        console.log("It's a tie!");
    } else if (
        humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "scissors" && computerChoice == "papers" ||
        humanChoice == "paper" && computerChoice == "rock"
    ){
        console.log("You won!");
        humanScore++;
    } else {
        console.log("You lost!");
        computerScore++;
    }
}

const humanSelection =getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection,computerSelection);