const missingNumbers = [5, 6, 7, 8];
const initialNumbers = [1, 2, 3, 4, ...missingNumbers, 9, 10];

const bigCities = ["New York", "Tokyo", "Berlin", "Shanghai", "London"];
const smallCities = ["Helsinki", "Oslo", "Lisbon", "Stockholm", "Tallinn"];
const cities = [...bigCities, ...smallCities];

bigCities.push("Paris");

const numbers = [100, 50, 300, 5];

console.log(Math.max(...numbers));
