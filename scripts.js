
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


function playRound(playerSelection, computerSelection) {

    // Transform input to lower case to avoid hiccups
    playerSelection = capitalize(playerSelection);

    let winCondition = (playerSelection == "Rock" && computerSelection == "Paper")
        || (playerSelection == "Paper" && computerSelection == "Rock")
        || (playerSelection == "Scissors" && computerSelection == "Paper");

    // check for a draw
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (winCondition) { // check for win
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lost! ${playerSelection} beats ${computerSelection}`;
    }

}

console.log(playRound("ROCK", "Rock"));
console.log(playRound("paper", "Rock"));
console.log(playRound("SCissors", "Rock"));


