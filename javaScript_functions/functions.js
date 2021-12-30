console.log(generateRandomNumber(10));

const generateRandomNumber = function (maxNumber) {
    const randNumber = Math.floor( Math.random() * maxNumber ) + 1;
    return randNumber;
}