const person1 = {
    name: "Adam",
    favfood: "Pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function() {console.log(`I'm eating ${this.favfood}`)},
}

person1.sayHello();
person1.eat();