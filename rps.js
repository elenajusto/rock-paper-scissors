const rpsMoves=['rock','paper','scissors']; // Moves in game
let playerWin = false; // Track if player won

// Makes computer makes move
function getComputerChoice(){
    // Randomly select move
    return rpsMoves[ Math.floor(Math.random() * rpsMoves.length)];
}

// Plays one ROUND of rock paper scissors
function playRound(playerSelection, computerSelection){
    
    // Makes player input case insensitive
    playerSelection = playerSelection.toLowerCase();
    console.log('Player choice:', playerSelection); // Debug

    // Debug - Show's computer's move
    console.log('Computer choice:', computerSelection); // Debug

    // Compares selections to decide winner/loser

    // Starts by checking if tie
    if (computerSelection == playerSelection) {
        console.log('Tie!');

    // Compares player selection to rock
    } else if (computerSelection == 'rock') {
        
        if (playerSelection == 'paper') {
            console.log('You win! Paper beats Rock'); // Debug
            //return playerWin = true;
        } else {
            console.log('You lose! Rock beats Scissors'); // Debug
        }
    
    // Compares player selection to paper
    } else if (computerSelection == 'paper') {

        if (playerSelection == 'scissors') {
            console.log('You win! Scissors beats Paper'); // Debug
            //return playerWin = true;
        } else {
            console.log('You lose! Paper beats Rock'); // Debug
        }

    }

    // Compares player selection to scissors
    else if (computerSelection == 'scissors') {

        if (playerSelection == 'rock') {
            console.log('You win! Rock beats Scissors'); // Debug
            //return playerWin = true;
        } else {
            console.log('You lose! Scissors beats Paper'); // Debug
        }

    }
    
}

// Plays one GAME of rock paper scissor
function game(playerSelection, computerSelection){

    // Calls playRound() 5 times
    for (let i = 0; i < 5; i++) {

        // Asks for user's selection
        playerSelection = prompt('What is your move?')

        // Changes computer selection every round
        computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
    }

}

// Debug - Running one round
game(); 