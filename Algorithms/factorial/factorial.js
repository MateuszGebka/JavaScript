function factorial(number){
    if(number == 0){
        return 1;
    }
    let fact = 1;
    for(let i = 1; i <= number; i++){
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(0));