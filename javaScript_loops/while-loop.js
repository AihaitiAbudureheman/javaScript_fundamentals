function generateRandomNumber (maxNumber) {
    return Math.floor( Math.random() * maxNumber ) + 1;
}

let counter = 0;
while (counter < 10) {

    console.log(`The random number is ${generateRandomNumber(10)}`);
    counter += 1;
} 