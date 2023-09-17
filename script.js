// === Get HTLM Elements and their corresponding values === //
const movesBtn = document.querySelectorAll(".btn"); // Select all player Choices

let scorePlayerDisplay = document.querySelector(".scorePlayer");
let scoreComputerDisplay = document.querySelector(".scoreComputer");

let playerChoiceDisplay = document.querySelector(".playerChoice");
let computerChoiceDisplay = document.querySelector(".computerChoice");
let message = document.querySelector(".message");

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

    const playMove = choice[randomChoice];
    return playMove;
}

// Check winner of each round
function updateDisplay(playerSelection, computerSelection, messageText) {
    scorePlayerDisplay.textContent = playerScore;
    scoreComputerDisplay.textContent = computerScore;
    playerChoiceDisplay.textContent = `${playerSelection}`;
    computerChoiceDisplay.textContent = `${computerSelection}`;
    message.textContent = messageText;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        updateDisplay(playerSelection, computerSelection, `It's a tie!🫱🏾‍🫲🏾`);
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Rock')) {
        playerScore++
        updateDisplay(playerSelection, computerSelection, `You Win 🥇! ${playerSelection} beats ${computerSelection}!`);
    } else {
        computerScore++
        updateDisplay(playerSelection, computerSelection, `You lose 🥲! ${computerSelection} beats ${playerSelection}!`);
    }
}

function announceTheWinner() {
    if (computerScore > playerScore) {
        modal.classList.add('loser');
        restartButton.classList.add('loser');
        modal.classList.remove('display');
        overlay.classList.remove('display');
        winner.textContent = `Sorry you lost the game🥲!! with a score of ${playerScore} against computer's score of ${computerScore}!`;
        restartButton.textContent = `Try again!!`;
    } else {
        modal.classList.add('winner');
        restartButton.classList.add('winner');
        modal.classList.remove('display');
        overlay.classList.remove('display');
        winner.textContent = `You've won!🎇🥳🥂 with a score of ${playerScore} against computer's score of ${computerScore}!`;
        restartButton.textContent = `Play Again!!`;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    scorePlayerDisplay.textContent = 0;
    scoreComputerDisplay.textContent = 0;
    playerChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
    message.textContent = '';
    winner.textContent = '';
    modal.classList.remove('winner', 'loser');
    restartButton.classList.remove('winner');
    restartButton.classList.remove('loser');
    overlay.classList.add('display');
    modal.classList.add('display');
}

function game() {
    const playerSelection = playerMove;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

movesBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        playerMove = btn.getAttribute("data-value");
        if ((playerScore > 4) || (computerScore > 4)) {
            announceTheWinner();
        } else {
            game();
        }
    });
});

// restartButton.addEventListener("click", resetGame);

// ====== Copyright ===== //
let year = document.querySelector(".year");

console.log(year);

const getCurrentYear = new Date().getFullYear();

year.textContent = getCurrentYear;