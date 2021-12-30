// 1.Collect number from a user
const inputMin = prompt("Please provide your smallest number:");
const inputMax = prompt("Please provide your biggest number:");

// 2.Convert the input string to a number
const maxNumber = parseInt(inputMax);
const minNumber = parseInt(inputMin);

if (maxNumber && minNumber) {
// 3.Make use of Math.random() and the user's number to generate a random number
const randNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  
// 4.Create a message displaying the random number
console.log(`${randNumber} is a random number between ${minNumber} and ${maxNumber}.`);
} else {
console.log("Sorry you need to provide two numbers, and try again.");
}

