function Car(make, model){
    this.make = make,
    this.model = model
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang");
const car2 = new Car("BMW", "Tiger");

console.log(car1.make);
console.log(car1.model);
car1.drive();

console.log(car2.make);
console.log(car2.model);
car2.drive();
