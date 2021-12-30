const inStock = ['pizza', 'garlic', 'eggs', 'apples', 'milk', 'butter', 'bread', 'lettuce', 'carrots', 'broccoli', 'tomato', 'crackers', 'chili', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if (!search) {
    message = `<strong>In Stock:</strong> ${inStock.join(" | ")}`;
} else if (inStock.includes(search.toLowerCase())) {
    message = `Yes we have <strong>${search}</strong>. Its #${inStock.indexOf(search.toLowerCase()) + 1} on the list.`;
} else {
    message = `Sorry we do not have ${search}.`;
}

document.querySelector("main").innerHTML = `<p>${message}</p>`;