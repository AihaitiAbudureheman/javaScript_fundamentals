const textToCount = prompt("Enter Your Text Here:");
const textSize = textToCount.length;

const infoMessage = `<h1>You typed: ${textToCount}, It has ${textSize} characters including white spaces.</h1>`;

console.log(infoMessage);

document.querySelector("header").innerHTML = infoMessage;