const main = document.querySelector('main');


let htmlString = "";

for ( let i = 10; i <= 1000; i += 10) {
htmlString += `<div>${i}</div>`;
}
main.innerHTML = htmlString; 
console.log(htmlString);

