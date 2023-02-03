let rpsMoves=['rock','paper','scissors']; // Moves in game

function getComputerChoice(){
    // Randomly select move
    return rpsMoves[ Math.floor(Math.random() * rpsMoves.length)];
}

console.log(getComputerChoice()); // Debug
