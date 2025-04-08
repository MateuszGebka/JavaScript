// swapping variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);

console.log(b);

//  swapping elements in an array


const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//  assign array elements to variables

const colors2 = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors2;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


// extract values from objects

const person1 = {
    firstName: "Adam",
    lastName: "Boba",
    age: 30,
    job: "Zlodziej",
}

const person2 = {
    firstName: "Beata",
    lastName: "Saba",
    age: 15,
}


// const {firstName, lastName, age, job} = person1;
const {firstName, lastName, age, job="Unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


// destructure in function parameters


function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);
