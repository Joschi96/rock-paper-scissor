let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('input');

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
        return humanChoice;
    } else{
        alert("Wrong input. Please choose one of the valid choices!");
        getHumanChoice();
    }
}

function disableButtons(){
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function playRound(humanChoice) {
    let computerSelection = getComputerChoice();
    let result = '';

        if (humanChoice === computerSelection) {
            result = ('It\'s a tie. You both chose ' + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)+ 
                '.<br><br> Player score: ' + humanScore + '<br>Computer Score: '
                + computerScore);
        } 
        else if (
            humanChoice == "rock" && computerSelection == "scissors" ||
            humanChoice == "scissors" && computerSelection == "papers" ||
            humanChoice == "paper" && computerSelection == "rock"
        ){
            humanScore++;
            result = ('You won! ' + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) 
                + ' beats '+ computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) +
                '!<br><br> Player score: ' + humanScore + '<br>Computer Score: '
                + computerScore);

            if (humanScore==5) {
                result += '<br><br>You won the game! Reload page to play again!'
                disableButtons();
            }
        } 
        else {
            computerScore++;
            result = ('You lost! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats '
                + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) +
                '!<br><br>Player score: ' + humanScore + '<br>Computer Score: '
                + computerScore);
            if (computerScore==5) {
                result += '<br><br>You lost the game! Reload page to play again!'
                disableButtons();
            }
        }
        document.querySelector('.score').innerHTML = result;
} 

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        playRound(button.value.toLowerCase());
    })
});