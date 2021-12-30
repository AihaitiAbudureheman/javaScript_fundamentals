const inStock = ['pizza', 'garlic', 'eggs', 'apples', 'milk', 'butter', 'bread', 'lettuce', 'carrots', 'broccoli', 'tomato', 'crackers', 'chili', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if ( inStock.includes(search.toLowerCase()) ) {
  message = `Yes, we have <strong>${search}</strong>. It's #${inStock.indexOf(search.toLowerCase()) + 1} on the list!`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;