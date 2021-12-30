/*
The Number Guessing Game stores a single number between
1 and 5, and gives the player one attempt to guess the 
number.
*/

// When the game begins the isCorrectGuess is false
let isCorrectGuess = false;
const actualNumber = 3; // Number to guess
const myGuess = prompt("Please guess a number between 1 and 5!");


/*
1.Test if a player's guess matches the actualNumber value
2.Update the value of isCorrectGuess to true if they match
*/
if (+myGuess === actualNumber) {
    // isCorrectGuess = true;
}

// Test if guess is correct and ouput response
if (isCorrectGuess) {
    console.log("Great!");
} else {
    console.log(`Sorry the number was ${actualNumber}`);
}