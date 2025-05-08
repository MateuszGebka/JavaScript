

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You walk the dog");
        }, 1500);
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You clean the kitchen");
        }, 2500);
    })
}

function throwThrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You throw out the trash");
        }, 500);
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return throwThrash()})
         .then(value => {console.log(value)});