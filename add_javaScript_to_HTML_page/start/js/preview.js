var name = prompt("What is your name?");
alert(`Hi, ${name}. Want to see something cool?`);
document.querySelector('html').innerHTML = `
  <h1>Welcome to ${name}'s site!</h1>
  <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif">
`;
