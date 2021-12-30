const main = document.querySelector('main');
let html = '';

for ( let i = 1; i <= 10; i+=1 ) {
  html += `<div>${i}</div>`;
}

main.innerHTML = html;