function Car(make, model, year){
    this.make = make,
    this.model = model,
    this.year = year,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 1212);
const car2 = new Car("BMW", "Tiger", 313223);
const car3 = new Car("Audi", "SASD", 1);
const car4 = new Car("Lambo", "Volvo", -122);

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
car2.drive();

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
car3.drive();

console.log(car4.make);
console.log(car4.model);
console.log(car4.year);
car4.drive();


const drive = document.getElementById("drive");

function driving(){
    console.log(`You are driving ${car1.model} faster!`);
    drive.textContent = `You are driving ${car1.model} faster!`;
}