// The getElementById example
const myHeading = document.getElementsByTagName("h1")[0];
const myButton = document.getElementById("myButton");
const myTextInput = document.getElementById("myTextInput");

myButton.addEventListener("click", () => {
    myHeading.style.color = myTextInput.value;
});

// The getElementsByClassName example
const myList = document.getElementsByTagName("li");

for(let i = 0; i < myList.length; i++){
    myList[i].style.color = "purple";
}

const notCar = document.getElementsByClassName("notCar");

for(let i = 0; i < notCar.length; i++){
    notCar[i].style.color = "pink";
}

// The querySelector() and querySelectorAll() examples
const myList = document.getElementsByTagName("li");

for(let i = 0; i < myList.length; i++){
    myList[i].style.color = "purple";
}

const notCar = document.querySelectorAll(".notCar");

for(let i = 0; i < notCar.length; i++){
    notCar[i].style.color = "pink";
}

const evens = document.querySelectorAll("li:nth-child(odd)");

for(let i = 0; i < evens.length; i++){
    evens[i].style.backgroundColor = "lightgray";
}