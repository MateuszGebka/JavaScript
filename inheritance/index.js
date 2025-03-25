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
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
    
}

const rab = new Rabbit;
const fish = new Fish;
rab.eat();
fish.eat();

rab.run();
fish.swim();