const myList = document.getElementsByTagName("li");

for(let i = 0; i < myList.length; i++){
    myList[i].style.color = "purple";
}

const notCar = document.getElementsByClassName("notCar");

for(let i = 0; i < myList.length; i++){
    notCar[i].style.color = "pink";
}