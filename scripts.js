

var playerScore = 0;
var computerScore = 0;
// Function randomly returns rock, paper, or scissors
function computerPlay() {

    let playSelections = ["Rock", "Paper", "Scissors"];

    let computerSelection = playSelections[Math.floor(Math.random() * playSelections.length)];

    return computerSelection;

}
// Helper function capitalizes first letter and lowercases the rest of the string
function capitalize(str) {

    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

}


function playRound(playerSelection) {

    // Transform input to lower case to avoid hiccups
    playerSelection = capitalize(playerSelection);
    let computerSelection = computerPlay();

    let winCondition = (playerSelection == "Rock" && computerSelection == "Scissors")
        || (playerSelection == "Paper" && computerSelection == "Rock")
        || (playerSelection == "Scissors" && computerSelection == "Paper");

    // check for a draw
    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
        return "It's a draw!";
    } else if (winCondition) { // check for win
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        console.log(`You Lost! ${playerSelection} loses to ${computerSelection}`);
        return `You Lost! ${playerSelection} loses to ${computerSelection}`;
    }
}



function displayResult(roundResult) {

    const results = document.querySelector("#results");


    if (roundResult.includes("Win")) {
        playerScore++;
    } else if (roundResult.includes("Lost")) {
        computerScore++;
    }

    results.innerHTML += `${roundResult} <br> You: ${playerScore} PC: ${computerScore} <hr>`;


}


function game() {
    const rockButton = document.querySelector("#rock-btn");
    rockButton.addEventListener('click', () => displayResult(playRound('rock')));

    const paperButton = document.querySelector("#paper-btn");
    paperButton.addEventListener('click', () => displayResult(playRound('paper')));

    const scissorsButton = document.querySelector("#scissors-btn");
    scissorsButton.addEventListener('click', () => displayResult(playRound('scissors')));
}


game();

