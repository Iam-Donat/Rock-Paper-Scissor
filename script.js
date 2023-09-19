// === Get HTLM Elements === //
const overlay = document.querySelector('.overlay');

const scoreDisplayPlayer = document.querySelector('.player__score');
const scoreDisplayComputer = document.querySelector('.computer__score');

const playerMoves = document.querySelectorAll('.moves span');
console.log(playerMoves);

// Iniate values
let player;
let computer;

let currentRoundNumber = 1;

// functions
function getPlayerMove() {
    playerMoves.forEach(move => {
        move.addEventListener('click', () => {
            if (move.className === 'rock') {
                player = 'rock';
            } else if (move.className === 'paper') {
                player = 'paper'
            } else if (move.className === 'scissor') {
                player = 'scissor'
            };
            return player
        })
    })

}

function getComputerMove() {
    const choices = ['rock', 'paper', 'scissor'];

    const randomChoice = Math.floor((Math.random() * choices.length));

    computer = choices[randomChoice]

    return computer;
}

function playerSelection(player, computer) {

}







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