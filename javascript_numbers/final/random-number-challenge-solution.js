/*
  Initial Solution
*/

// Collect number from a user
const inputMax = prompt('Please provide a number');

// Convert the input string to a number
const maxNumber = parseInt(inputMax);

// Make use of Math.random() and the user's number to generate a random number
const randNumber = Math.floor( Math.random() * maxNumber ) + 1;
  
// Create a message displaying the random number
console.log(`${randNumber} is a random number between 1 and ${maxNumber}.`);


/* 
  Additional solution with conditional statements
*/


// Collect number from a user
const inputMax = prompt('Please provide a number');

// Convert the input string to a number
const maxNumber = parseInt(inputMax);


if (maxNumber) {
  // Make use of Math.random() and the user's number to generate a random number
  const randNumber = Math.floor( Math.random() * maxNumber ) + 1;
  
  // Create a message displaying the random number
  console.log(`${randNumber} is a random number between 1 and ${maxNumber}.`);
} else {
  console.log('Sorry, You need to provide a number. Try again.');
}


/* 
  Solution to generate random numbers between two user provided numbers
*/

// Collect number from a user
const inputMin = prompt('Please provide your smallest number');
const inputMax = prompt('Please provide your biggest number');

// Convert the input string to number
const minNumber = parseInt(inputMin);
const maxNumber = parseInt(inputMax);

if (minNumber && maxNumber) {
  // Make use of Math.random() and the user's number to generate a random number
  const randNumber = Math.floor( Math.random() * (maxNumber - minNumber + 1) ) + minNumber;

  // Create a message displaying the random number
  console.log(`${randNumber} is a random number between ${minNumber} and ${maxNumber}.`);
} else {
  console.log('Sorry, You need to provide two numbers. And try again.');
}