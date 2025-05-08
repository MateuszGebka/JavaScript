

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = false;

            if(dogWalked){
                resolve("You walk the dog");
            }
            else{
                reject("You didn't walk the dog");
            }
        }, 1500);
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You clean the kitchen");
            }
            else{
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    })
}

function throwThrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const thrashTakenOut = true;
            if(thrashTakenOut){
                resolve("You throw out the trash");
            }
            else{
                reject("You didn't throw out the trash");
            }
        }, 500);
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return throwThrash()})
         .then(value => {console.log(value); console.log("You finished all the chores!")})
         .catch(error => console.error(error));