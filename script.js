// Start Computer Logic

function getComputerSelection() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomChoice = choice[Math.floor(Math.random() * 3)];
    return randomChoice;
}

// End Computer Logic

// Start One Round Logic

function playRound(playerSelection, computerSelection) {

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return ("You win");

    } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) {
        return ("Computer wins");

    } else {
        return ("Tie game");
    }
}

// End One Round Logic

// Start Main Game Logic

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const container = document.querySelector('.result');
const winner = document.createElement('p');
let message = '';
let playerScore = 1;
let computerScore = 1;

rock.addEventListener('click', () => {
    game('rock');
});

paper.addEventListener('click', () => {
    game('paper');
});

scissors.addEventListener('click', () => {
    game('scissors');
});

function game(choice) {

    const playerSelection = choice;
    const computerSelection = getComputerSelection();
    const result = playRound(playerSelection, computerSelection);

    const pScore = document.createElement('p');
    pScore.textContent = `- Your score : ${playerScore}`;
    const cScore = document.createElement('p');
    cScore.textContent = `- Computer score : ${computerScore}`;
    const displayResult = document.createElement('p');
    displayResult.textContent = result;
    container.appendChild(displayResult);

    if (result === "You win") {
        playerScore++;
        container.appendChild(pScore);
    } else if (result === "Computer wins") {
        computerScore++;
        container.appendChild(cScore);
    }
    if (playerScore === 6 || computerScore === 6) {


        if (computerScore > playerScore) {
            message = "-- Computer wins the game!";
        } else if (playerScore > computerScore) {
            message = "-- Congratulations! You win the game!!";
        } else {
            message = "-- Tie game, no one wins";
        }

        winner.textContent = message;
        winner.style.color = '#c1c1c1';
        container.appendChild(winner);

        playerScore = 1;
        computerScore = 1;
    }

}

// End Main Game Logic