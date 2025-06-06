

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

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

            const kitchenCleaned = false;
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

/*
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return throwThrash()})
         .then(value => {console.log(value); console.log("You finished all the chores!")})
         .catch(error => console.error(error));
*/


async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const throwOutThrashResult = await throwThrash();
        console.log(throwOutThrashResult);
    
        console.log("You finished all chores");
    }
    catch(error){
        console.error(error);
    }
}

doChores();