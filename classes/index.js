
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }


    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 12);
const product2 = new Product("Jeans", 52);
const product3 = new Product("Majty", 11112);

const product4 = new Product("A", 3332);
const product5 = new Product("B", 1);
const product6 = new Product("C", -121);

const total = product1.calculateTotal(salesTax);

/*
console.log(total);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
*/   


class MathUtil{
    static PI = 3;

    static getDiameter(radius){
        return radius*2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius ** 2;
    }
}
/*

console.log(MathUtil.PI);

console.log(MathUtil.getDiameter(12));

console.log(MathUtil.getCircumference(12));

console.log(MathUtil.getArea(12));
*/

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users`);
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Adam");
const user2 = new User("Bartek");
const user3 = new User("Czesław");

console.log(user1.username);
console.log(User.userCount);

user1.sayHello();

user2.sayHello();

user3.sayHello();

User.getUserCount();

const user4 = new User("A");
const user5 = new User("B");
const user6 = new User("C");

console.log(User.userCount);

user4.sayHello();

user5.sayHello();

user6.sayHello();


user4.sayHello();

user5.sayHello();

user6.sayHello();


user4.sayHello();

user5.sayHello();

user6.sayHello();

User.getUserCount();

const user7 = new User("D");
const user8 = new User("E");
const user9 = new User("F");

console.log(User.userCount);

user7.sayHello();

user8.sayHello();

user9.sayHello();

User.getUserCount();

const user10 = new User("G");

User.getUserCount();