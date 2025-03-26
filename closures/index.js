
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

    function getCount(){
        return count;
    }

    return {adder, getCount};
}

const counter = increment();

counter.adder();
counter.adder();
counter.adder();
counter.adder();
counter.adder();

console.log(`The curr count is: ${counter.getCount()}`)

counter.adder();
counter.adder();
counter.adder();

console.log(`The curr count is: ${counter.getCount()}`)



function createGame(){
    let score = 0;


    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}


const game = new createGame();

game.increaseScore(5);
game.increaseScore(2);
game.increaseScore(7);
game.decreaseScore(1);
game.decreaseScore(4);

console.log(`Final score: ${game.getScore()}pts`);
