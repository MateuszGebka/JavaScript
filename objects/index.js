const person = {
    firstName: "Adam",
    lastName: "Beksa",
    age: 999,
    isEmployed: true,
    sayHello: function(){console.log("Czesc! Tu Adam")},
};

console.log(person.firstName);
console.log(person.age);
console.log(person.isEmployed);
person.sayHello();


const person1 = {
    firstName: "Barbara",
    lastName: "Samola",
    age: 9199,
    isEmployed: false,
    sayHello: function(){console.log("Czesc! Tu Barbara")},
    eat: () => console.log("Nie pracuję"),
};

console.log(person1.firstName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();