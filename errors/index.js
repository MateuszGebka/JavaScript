

try{
    console.log(x);

    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS

}
catch(error){
    console.error(error);
}
finally{

    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES

    console.log("Finally");
}

console.log("Koniec")


try{
    const dzielna = Number(window.prompt("Podaj dzielną: "));
    const dzielnik = Number(window.prompt("Podaj dzielnik: "));

    if (dzielnik == 0){
        throw new Error("Nie mozna dzielic przez 0");
    }
    if(isNaN(dzielna) || isNaN(dzielnik)){
        throw new Error("Liczby");
    }
    const iloraz = dzielna / dzielnik;
    console.log(iloraz);
}
catch(error){
    console.error(error);
}

console.log("FINAL");