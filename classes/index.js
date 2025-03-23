
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

console.log(total);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
