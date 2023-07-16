// Getting Choices 
const choice = ["Rock", "Paper", "Scissors"]

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

        return "It's a tie 🫱🏾‍🫲🏾"

    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Rock')) {

        return `You Win 🥇! ${playerSelection} beats ${computerSelection}!`;

    } else {

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

        // if (i === 5) {
        //     break;
        // }
    }
}

// game();


