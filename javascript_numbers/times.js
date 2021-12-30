const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secondsPerMinute * minutesPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day.`);

// 1. Define a variable named myAge and assign it your age
const myAge = 36; 
// 2. I have been alive for more than X seconds in the console
console.log(`I have been alive for more than ${myAge * 365 * secondsPerDay} seconds.`);