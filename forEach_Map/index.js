let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
//numbers.forEach(display);

function double(element, index, array){
    array[index] = element*2;
}

/*
function display(element){
    console.log(element);
}
*/

let fruit = ["apple", "orange", "banana"];

//fruit.forEach(upper);
fruit.forEach(upperFirst);
fruit.forEach(display);
fruit.forEach(upperFirst);
fruit.forEach(display);
fruit.forEach(upperFirst);
fruit.forEach(display);



function upper(element, index, array){
    array[index] = element.toUpperCase();
}

function upperFirst(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}