function isEmpty() {
    const nameField = document.querySelector("#fullName");

    if (!nameField.value){
        return true;
    } else {
        return false;
    }
}

const isFieldEmpty = isEmpty();

if (isFieldEmpty){
    console.log("The name field is required!");
}


