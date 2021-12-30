const student = {
    fullName: "John Smith",
    city: "Helsinki",
    age: 36,
    isAdult: true,
    goodAt: ["Chemistry", "Mathematics", "English"]
};

for (let prop in student){
    console.log(`${prop}: ${student[prop]}`);
}