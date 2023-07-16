// Getting Choices 
const choice = ["Rock", "Paper", "Scissors"]
let playerScore = 0;  // scores
let computerScore = 0;  // scores

function getComputerChoice() {

    //Getting a Random Index to match the computer choices
    const randomChoice = Math.floor(Math.random() * choice.length);

    // console.log(randomChoice)

    const playMove = choice[randomChoice];

    // console.log(playMove)
    return playMove;

}

// const computerSelection = getComputerChoice();

// const playerSelection = "Scissors";

//Function to track the Winner of each round
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {

        playerScore = playerScore;
        computerScore = computerScore;
        console.log(playerScore);
        console.log(computerScore);

        return "It's a tie 🫱🏾‍🫲🏾"

    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Rock')) {

        playerScore++
        console.log('Player Score: ' + playerScore);

        return `You Win 🥇! ${playerSelection} beats ${computerSelection}!`;

    } else {

        computerScore++
        console.log('Computer score: ' + computerScore);

        return `You lose 🥲! ${computerSelection} beats ${playerSelection}!`;

    }

}


// console.log(playRound(playerSelection, computerSelection));

function game() {

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`Please select your move between ${choice}`);
        console.log(`Your choice is: ${playerSelection}`);

        const computerSelection = getComputerChoice();
        console.log(`Computer choise is : ${computerSelection}`);

        console.log(playRound(playerSelection, computerSelection));
        console.log('----------------------------------------------------------------');

<<<<<<< HEAD
        // if (i === 5) {
        //     break;
        // }
=======
        if (i === 5) {
            return 'Game over';
        }
>>>>>>> rps-ui
    }

    if (playerScore > computerScore) {
        console.log(`You won the round with a score of ${playerScore} 🥳🥂`);
    } else if (playerScore < computerScore) {
        console.log(`You lost the round with a score of ${playerScore}  🥲🥲 against ${computerScore} of the computer`);
    } else {
        console.log(`The game ends in draw with a your score of ${playerScore} vs the Computer Score of ${computerScore} 🫱🏾‍🫲🏾`);
    }
}

// game();
