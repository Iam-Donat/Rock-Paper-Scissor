// === Get HTLM Elements === //
const overlay = document.querySelector('.overlay');

const scoreDisplayPlayer = document.querySelector('.player__score');
const scoreDisplayComputer = document.querySelector('.computer__score');

const playerMoves = document.querySelectorAll('.moves span');
console.log(playerMoves);

const resultDisplay = document.querySelector('.result');
const moveResult = document.querySelector('.state')
const playerMove = document.querySelector('.player__move');
const computerMove = document.querySelector('.computer__move');

// Iniate values
let scorePlayer = 0;
let scoreComputer = 0;
let round = 1;

const choices = ['rock', 'paper', 'scissor'];
// functions
function getComputerMove() { //getting random computer move
    const randomChoice = Math.floor((Math.random() * choices.length));
    const computer = choices[randomChoice]
    return computer;
}

function playRound(player) { //dictate the outcome of each round
    const computerchoice = getComputerMove();
    const roundResult = playersSelection(player, computerchoice);
    resultDisplay.textContent = roundResult;
    if (roundResult === `It's a tie!`) {
        moveResult.textContent = ``
    } else if (roundResult === `You win!`) {
        moveResult.textContent = `${player} beats ${computerchoice}`;
    } else {
        moveResult.textContent = `${computerchoice} beats ${player}`;
    }

}
function playersSelection(player, computer) {
    if (player === computer) {
        return `It's a tie!`;
    } else if (
        (player === 'rock' && computer === 'scissor') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissor' && computer === 'paper')
    ) {
        scoreDisplayPlayer.textContent = scorePlayer++
        return `You win!`;
    } else {
        scoreDisplayComputer.textContent = scoreComputer++
        return `Computer wins!`;
    }
}

//EventListener to Trigger gameplay 
playerMoves.forEach(move => {
    move.addEventListener('click', () => {
        const player = move.className
        playRound(player)
    })
})
//Modals
// === Modal How to PLay 
const helpBtn = document.querySelector('.help-btn');

const helpModal = document.querySelector('.help-modal');
const closeModal = document.querySelector('.close-btn');

helpBtn.addEventListener('click', () => {
    helpModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

closeModal.addEventListener('click', () => {

    helpModal.classList.add('hidden');
    overlay.classList.add('hidden');
})
// ====== Copyright ===== //
let year = document.querySelector(".year");

// console.log(year);

const getCurrentYear = new Date().getFullYear();

year.textContent = getCurrentYear;