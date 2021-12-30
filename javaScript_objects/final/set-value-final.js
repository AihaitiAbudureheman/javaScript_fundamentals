const student = {
    fullName: "John Smith",
    city: "Helsinki",
    age: 36,
    isAdult: true,
    goodAt: ["Chemistry", "Mathematics", "English"]
};

student.nickname = "Johny";

const message = `Hello, I'm ${student.fullName}, I live in ${student.city}. Most people call me ${student.nickname}. Next year I will be ${student.age + 1}. I am good at ${student.goodAt.length} things. And they are ${student.goodAt.join(", ")}.`;

console.log(message);