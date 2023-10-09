function getComputerSelection() {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choice[randomChoice];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return ("You win");
    } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) {
        return ("Computer wins");
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return ("Tie game");
    } else {
        return ("Wrong input");
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {

        console.log(`Round ${round}`);

        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = getComputerSelection();
        const result = playRound(playerSelection, computerSelection);

        if (result === "You win") {
            playerScore++;
        } else if (result === "Computer wins") {
            computerScore++;
        } else {
        }

        console.log(result);

    }

    if (playerScore < computerScore) {
        console.log("Computer wins the game!");
    } else if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!!");
    } else if (computerScore === playerScore  && computerScore != 0 && playerScore != 0) {
        console.log("Tie game, no one wins");
    } else {
        console.log("Too many wrong inputs");
    }
}

game();