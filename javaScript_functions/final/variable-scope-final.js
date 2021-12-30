// Global scope
let age = 35;

function getAge() {
  // Function scope
  let age = 50;
  console.log(`Hello, ${age}!`);
}

getAge();
alert(`I am ${age}!`);
getAge();