const hello = function(){
    console.log("hello");
}

hello();


setTimeout(hello, 3001);

setTimeout(function(){
    console.log("3000lol");
}, 3000);


const numbers = [1, 2, 3, 4, 5, 6];

/*
const squares = numbers.map(square);

console.log(squares);
function square(element){
    return Math.pow(element,2);
}
*/

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(squares);

const evenNumbers = numbers.filter(function(element){
    return element % 2 === 0;
});

console.log(evenNumbers);

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(total);