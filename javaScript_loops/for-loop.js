function generateRandomNumber (maxNumber) {
    return Math.floor( Math.random() * maxNumber ) + 1;
}

for (let counter = 0; counter < 10; counter++) {
    console.log(`The random number is ${generateRandomNumber(10)}`);
}