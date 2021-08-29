const firstName = prompt("What is your first name?");
const lastName = prompt("What is your last name?");
let profileInfo = "";

profileInfo += "I am ";
profileInfo += firstName;
profileInfo += " ";
profileInfo += lastName;
profileInfo += ". ";
profileInfo += "I am a web developer.";
profileInfo += " I work at Cybercom.";

console.log(profileInfo);