
function outer() {
    
    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();  // ma dostęp do wszystkie wewnątrz outer()
}

// message = "Goodbye" - nie zadziała, bo message w outer jest prywatne
// outer();


function increment(){

    let count = 0;
    
    function adder(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    return {adder};
}

const counter = increment();

counter.adder();

counter.adder();

counter.adder();

counter.adder();

counter.adder();