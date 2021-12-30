const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");
const descriptionInput = document.querySelector("input.description");
const descriptionP = document.querySelector("p.description");
const descriptionButton = document.querySelector("button.description");
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");
const removeItemButton = document.querySelector("button.removeItemButton");
const listItems = document.getElementsByTagName("li");


for(let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", () => {
        listItems[i].textContent = listItems[i].textContent.toUpperCase();
    });
    listItems[i].addEventListener("mouseout", () => {
        listItems[i].textContent = listItems[i].textContent.toLowerCase();
    });
}



toggleList.addEventListener("click", () => {
    if (listDiv.style.display === "none") {
        listDiv.style.display = "block";
        toggleList.textContent = "Hide list";
    } else {
        listDiv.style.display = "none";
        toggleList.textContent = "Show list";
    }
});

descriptionButton.addEventListener("click", () => {
    descriptionP.innerHTML = descriptionInput.value + ":";
    descriptionInput.value = "";
});

addItemButton.addEventListener("click", () => {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = "";
});

removeItemButton.addEventListener("click", () => {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.querySelector("li:last-child");
    ul.removeChild(li);
});
