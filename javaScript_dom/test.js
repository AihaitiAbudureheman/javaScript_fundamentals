function caller(saySomething, text){
    saySomething(text);
}

caller((message) => {
    console.log(message);
    "Hello Guys";
});