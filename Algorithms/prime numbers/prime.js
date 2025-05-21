function isPrime(number){
    const threshhold = Math.floor(Math.sqrt(number)) + 1;

    for(let i = 2; i <= threshhold; i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(18));