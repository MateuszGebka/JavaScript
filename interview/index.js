/*
Write a function fizzBuzz(n) that prints the numbers 1 through n but for multiples of 3 prints “Fizz”, 
for multiples of 5 prints “Buzz”, and for multiples of both prints “FizzBuzz”.
*/

function fizzBuzz(n) {
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(`${i} FizzBuzz`);
        } 
        else if(i % 3 === 0){
            console.log(`${i} Fizz`);
        }
        else if(i % 5 === 0){
            console.log(`${i} Fizz`);
        }
    }
}

fizzBuzz(21);


/*

Given an array of numbers, how would you 
produce a new array containing only the even numbers,
 each multiplied by 2? Show code using filter and map.
*/


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledEven = arr.filter(n => n % 2 === 0).map(n => n*2);
console.log(doubledEven);

const p = document.getElementById("par");
p.textContent = "DEF";