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

function recFactorial(number){
    if(number == 1){
        return number;
    }
    return recFactorial(number-1) * number;
}

console.log(recFactorial(6));