// === Get HTLM Elements and their corresponding values === //
const movesBtn = document.querySelectorAll(".btn"); // Select all player Choices

let scorePlayerDisplay = document.querySelector(".scorePlayer");
let scoreComputerDisplay = document.querySelector(".scoreComputer");

let playerChoiceDisplay = document.querySelector(".playerChoice");
let computerChoiceDisplay = document.querySelector(".computerChoice");
let message = document.querySelector("#message");


//Initializing Score Value
let playerScore = 0;  // scores
let computerScore = 0;  // scores


let playerMove = "";

let isGame = false; // Control the flow of the game

movesBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        ;

        playerMove = btn.getAttribute("data-value");

        game();
    });
});






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

// // console.log(getComputerChoice());

// // const computerSelection = getComputerChoice();

// // const playerSelection = "Scissors";

// //Function to track the Winner of each round
function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {

        scorePlayerDisplay.textContent = playerScore;
        scoreComputerDisplay = computerScore;
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

        console.log('Computer score: ' + computerScore);
        scoreComputerDisplay.textContent = computerScore;

        playerChoiceDisplay.textContent = `${playerSelection}`;
        computerChoiceDisplay.textContent = `${computerSelection}`;

        message.textContent = `You lose 🥲! ${computerSelection} beats ${playerSelection}!`;

    }

}

// // console.log(playRound(playerSelection, computerSelection));

function game() {

    const playerSelection = playerMove;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

}

// // movesBtn.forEach(btn => { btn.addEventListener("click", game) })
