const rpsMoves=['rock','paper','scissors']; // Moves in game


// Makes computer makes move
function getComputerChoice(){
    // Randomly select move
    return rpsMoves[ Math.floor(Math.random() * rpsMoves.length)];
}

// Plays one round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
    
    // Makes player input case insensitive
    playerSelection = playerSelection.toLowerCase();
    console.log('Player choice:', playerSelection); // Debug

    // Debug - Show's computer's move
    console.log('Computer choice:', computerSelection); // Debug

    // Compares selections to decide winner/loser

    // Starts by checking if tie
    if (computerSelection == playerSelection) {
        return 'Tie!';

    // Compares player selection to rock
    } else if (computerSelection == 'rock') {
        
        if (playerSelection == 'paper') {
            return 'You win! Paper beats Rock';
        } else {
            return 'You lose! Rock beats Scissors';
        }
    
    // Compares player selection to paper
    } else if (computerSelection == 'paper') {

        if (playerSelection == 'scissors') {
            return 'You win! Scissors beats Paper';
        } else {
            return 'You lose! Paper beats Rock';
        }

    }

    // Compares player selection to scissors
    else if (computerSelection == 'scissors') {

        if (playerSelection == 'rock') {
            return 'You win! Rock beats Scissors';
        } else {
            return 'You lose! Scissors beats Paper';
        }

    }
    
}

// Debug - Running one round
const playerSelection = 'paper';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
