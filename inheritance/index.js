class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
}

class Fish extends Animal{
    name = "fish";
}

const rab = new Rabbit;
const fish = new Fish;
rab.eat();
fish.eat();