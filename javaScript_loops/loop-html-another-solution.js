/**
 * Original Solution
 */
// const main = document.querySelector('main');


// let htmlString = "";

// for ( let i = 10; i <= 1000; i += 10) {
// htmlString += `<div>${i}</div>`;
// }
// main.innerHTML = htmlString; 
// console.log(htmlString);


/**
 * New Solution
 */

/**
 * To display every number inside their own main element:
 * First we need to select the body element instead of main element, 
 * in simple words, we use the body element as the direct parent for all the numbers displayed inside main element
 */
const theBodyElement = document.querySelector('body');

/**
 * The variable to store the generated HTML document will not change,
 */

let htmlString = "";


/**
 * This time we wrap the div element with main element
 * So, this part: htmlString += `<div>${i}</div>`
 * Will change to this: htmlString += `<main><div>${i}</div></main>`
 */

for ( let i = 10; i <= 1000; i += 10) {
htmlString += `<main><div>${i}</div></main>`;
}

/**
 * Finally, we will append or insert these generated html elements which are assigned to htmlString variable to the document body, which is this 'theBodyElement'
 */
theBodyElement.innerHTML = htmlString; 
console.log(htmlString);

/**
 * Because of the following css styles:
 *   main {
    width: 90%;
    max-width: 1080px;
    padding: 40px 0 0;
    margin: 0 auto;
  }
  The numbers will display vertically, check the image called Test.PNG
 */


