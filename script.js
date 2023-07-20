// === Get HTLM Elements and their corresponding values === //
const movesBtn = document.querySelectorAll(".btn"); // Select all player Choices

let scorePlayerDisplay = document.querySelector(".scorePlayer");
let scoreComputerDisplay = document.querySelector(".scoreComputer");

let playerChoiceDisplay = document.querySelector(".playerChoice");
let computerChoiceDisplay = document.querySelector(".computerChoice");
let message = document.querySelector("#message");

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal"); //Winner Announcement 
const winner = document.querySelector(".winnerDisplay");

const restartButton = document.querySelector("#restartBtn"); // Reset the game


//Initializing Score Value
let playerScore = 0;  // Initial Player scores
let computerScore = 0;  // Initial Computer scores

let playerMove = ""; // Get Player Choice to trigger the gameplay

function getComputerChoice() {

    // Getting the Computer Choices
    const choice = ["Rock", "Paper", "Scissors"]

    //Getting a Random Index to match the computer choices
    const randomChoice = Math.floor(Math.random() * choice.length);

    // console.log(randomChoice)

    const playMove = choice[randomChoice];

    // console.log(playMove)
    return playMove;
}

// Check winner of each round
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {

        scorePlayerDisplay.textContent = playerScore;
        scoreComputerDisplay.textContent = computerScore;
        // console.log(playerScore);
        // console.log(computerScore);

        playerChoiceDisplay.textContent = `${playerSelection}`;
        computerChoiceDisplay.textContent = `${computerSelection}`;

        message.textContent = `It's a tie!🫱🏾‍🫲🏾`;

    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Rock')) {

        playerScore++
        // console.log('Player Score: ' + playerScore);
        scorePlayerDisplay.textContent = playerScore;

        playerChoiceDisplay.textContent = `${playerSelection}`;
        computerChoiceDisplay.textContent = `${computerSelection}`;

        message.textContent = `You Win 🥇! ${playerSelection} beats ${computerSelection}!`;

    } else {

        computerScore++
        scoreComputerDisplay.textContent = computerScore;

        playerChoiceDisplay.textContent = `${playerSelection}`;
        computerChoiceDisplay.textContent = `${computerSelection}`;

        message.textContent = `You lose 🥲! ${computerSelection} beats ${playerSelection}!`;

    }

}

function announceTheWinner() {
    if (computerScore > playerScore) {
        modal.classList.add('loser');
        restartButton.classList.add('loser');
        modal.classList.remove('display');
        overlay.classList.remove('display');

        winner.textContent = `Sorry you lost the game🥲!! with a score of ${playerScore} against computer's score of ${computerScore}!`;
        restartButton.innerHTML = `Try again!!`;
    } else {
        modal.classList.add('winner');
        restartButton.classList.add('winner');
        modal.classList.remove('display');
        overlay.classList.remove('display');

        winner.textContent = `You've won!🎇🥳🥂 with a score of ${playerScore} against computer's score of ${computerScore}!`;

    }
}

function game() {

    const playerSelection = playerMove;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

}


movesBtn.forEach(btn => {
    btn.addEventListener("click", () => {

        playerMove = btn.getAttribute("data-value");

        if ((playerScore === 5) || (computerScore === 5)) {
            announceTheWinner();
        } else {
            game();
        }
    });
});

restartButton.addEventListener("click", () => { window.location.reload() });
