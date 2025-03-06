/*   ARRAYS
let fruits = ["banan", "jabłko", "idiota", "gruszka"];

fruits[1] = "zjeb";
fruits.push("debil");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("pierwszy");
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log("Wszystkie elementy:");
for(let fruit of fruits){
    console.log(fruit);
}
*/

/*  SPREAD
let names = "mateusz";
let letters = [...names].join("-");

console.log(letters);

let fruits = ["jablko", "banan", "bałwan", "abc"];
let newFruits = [...fruits]; // druga instancja tablicy

console.log(newFruits);

let warzywa = ["marchew", "pietruszka", "pomidor"];
let jedzenie = [...fruits, ...warzywa]; // instancja zawierająca elementy obu tablic
// let jedzenie = [...fruits, ...warzywa, "nowy", "kolejny"] - to co wyżej + nowe elementy

console.log(jedzenie);
*/


/*   REST


function openFridge(...foods){ // ile chcemy parametrów i łączy je w tablicę foods
    console.log(foods);
    console.log(...foods); // możemy spowrotem rodzielić elementy
}


const food1 = "jablko";
const food2 = "banan";
const food3 = "pomidor";

openFridge(food1, food2, food3);

*/


/*  REST
function sum(...numbers){
    let result = 0;
    console.log(numbers);
    for(let num of numbers){
        result += num;
    }
    return result;
}

console.log(sum(2, 3, 5));

*/


/*  REST
function combineString(...name){
    return name.join(" ");
}



const fullName = combineString("Mr.", "Mateusz", "Kowalski", "ABCSDDASD121212");
console.log(fullName);
*/