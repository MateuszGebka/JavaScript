class Animal{
    alive = true;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}`);
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


// SUPER KEYWORD

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}



const rab = new Rabbit;
const fish = new Fish;
rab.eat();
fish.eat();

rab.run();
fish.swim();

rab.run();
fish.swim();
rab.run();
fish.swim();

const hawk = new Hawk("Adam", 12, 50);

hawk.eat();
hawk.fly();

rab.run();
fish.swim();
rab.run();
fish.swim();