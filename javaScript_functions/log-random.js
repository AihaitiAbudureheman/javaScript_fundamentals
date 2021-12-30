function generateRandomNumber (maxNumber) {
    const randNumber = Math.floor( Math.random() * maxNumber ) + 1;
    return randNumber;
}

console.log(generateRandomNumber(10));
console.log(generateRandomNumber(200));
console.log(generateRandomNumber(10000));
console.log(generateRandomNumber(50));

