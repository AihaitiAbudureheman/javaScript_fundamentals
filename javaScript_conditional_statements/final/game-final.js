/*
  1. Store the number of correct guessed words
    -When game begins, no words guessed correct
*/
let correctGuesses = 0;

// 2. Store the badge name of a player
let badge;

// 3. Select the <main> HTML element
const mainElm = document.querySelector('main');

/*
  4. Ask 5 Word Guessing Questions
   - Store each guessed word in a variable
   - Keep track of the number of correct guessed words
*/

const word1 = prompt("Guess the shortest country name starts with letter A.");
if ( word1.toUpperCase() === 'ANGOLA' ) {
    correctGuesses += 1;
}
const word2 = prompt("Guess what goes up but never goes down.");
if ( word2.toUpperCase() === 'AGE' ) {
    correctGuesses += 1;
}
const word3 = prompt("Guess what has a head and tail but not body.");
if ( word3.toUpperCase() === 'COIN' ) {
    correctGuesses += 1;
}
const word4 = prompt("Guess what gets sharper the more you use it.");
if ( word4.toUpperCase() === 'BRAIN' ) {
    correctGuesses += 1;
}
const word5 = prompt("Guess where you can find an ocean without water.");
if ( word5.toUpperCase() === 'MAP' ) {
    correctGuesses += 1;
}

/*
  5. Offer a badge to a player based on number of correct words guessed
   - 5 correct = Diamond
   - 3-4 correct = Gold
   - 1-2 correct = Silver
   - 0 correct = No badge
*/
if ( correctGuesses === 5 ) {
    badge = "Diamond";
} else if ( correctGuesses >= 3 ) {
    badge = "Gold";
} else if ( correctGuesses >= 1 ) {
    badge = "Silver";
} else {
    badge = "None :)";
}

// 6. Display the final results inside the <main> element
mainElm.innerHTML = `
  <h1>You got ${correctGuesses} out of 5 words guessed correct.</h1>
  <h2>Badge earned: <u>${badge}</u></h2>
`;
