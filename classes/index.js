
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
}

const user1 = new User("Adam");
const user2 = new User("Bartek");
const user3 = new User("Czesław");

console.log(user1.username);
console.log(User.userCount);