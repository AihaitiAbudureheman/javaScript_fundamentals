// global scope
let age = 35;

function getAge() {
  // function scope
    let age = 50;
    console.log(`I am, ${age}!`);
  }

getAge();
console.log(`I am ${age}!`);
getAge();