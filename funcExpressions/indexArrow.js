const hello = (name, age) => {console.log(`Hello ${name}`)
                        console.log(`You are ${age} years old`)};

hello("aleaeafads", 123);


setTimeout( () => console.log("Hello"), 3000);


const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map( (element) => Math.pow(element, 2));
const even = numbers.filter( (element) => element % 2 === 0);
const total = numbers.reduce( (accumulator, next) => accumulator += next);

console.log(squares);
console.log(even);
console.log(total);