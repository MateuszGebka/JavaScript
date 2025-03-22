function Car(make, model, year){
    this.make = make,
    this.model = model,
    this.year = year,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 1212);
const car2 = new Car("BMW", "Tiger", 313223);

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car1.year);
car2.drive();


const drive = document.getElementById("drive");

function driving(){
    console.log(`You are driving ${car1.model} faster!`);
    drive.textContent = `You are driving ${car1.model} faster!`;
}