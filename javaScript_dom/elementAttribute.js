const input = document.querySelector("input");
const p = document.querySelector("p.description");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    p.innerHTML = input.value + ":";
});