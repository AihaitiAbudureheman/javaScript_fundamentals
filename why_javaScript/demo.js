const answer_name = prompt("What is your name?");
const answer_age = prompt("How old are you?");
const answer_country = prompt("Where are you from?");

document.querySelector("html").innerHTML = `
    <h1>
        My name is ${answer_name}, I am ${answer_age} years old, I am from ${answer_country}!
    </h1>
`;