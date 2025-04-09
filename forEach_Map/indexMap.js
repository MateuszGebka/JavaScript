const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}




const students = ["Adam", "Beata", "Czesław", "Dariusz"];

const upStudents = students.map(upperCase);

console.log(upStudents);

function upperCase(element){
    return element.toUpperCase();
}


const dates = ["2024-1-10", "2025-2-20", "2024-3-30"];


const formatedDates = dates.map(formatDates);

console.log(formatedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

