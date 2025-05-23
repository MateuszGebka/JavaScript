// BUBBLE SORT //

/*
let array = [4, -1, -7, 12, 1, 7];

function bubbleSort(array){
    let swap;
    do {
        swap = false;
        for(let i = 0; i < array.lentg - 1; i++) {
            if(array[i] > array[i+1]){
                [array[i], array[i+1]] = [array[i+1], array[i]];
                swap = true;
            }
        } 
    } while(swap)
}
console.log(array);
bubbleSort(array);
console.log(array);
*/

// INSERTION SORT //

// [-1, 4, -7, 12, 1, 7]
// [-7, -1, 4, 12, 1, 7]
// [-7, -1, 4, 12, 1, 7]
// [-7, -1, 1, 4, 12, 7]
// [-7, -1, 1, 4, 7, 12]


/*
let array = [4, -1, -7, 12, 1, 7];

function insertionSort(array){
    if(array.length < 2){
        return array;
    }
    for(let i = 1; i < array.length; i++){
        let NTI = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > NTI){
            array[j+1] = array[j];
            j -= 1;
        }
        array[j+1] = NTI;
    }
}

console.log(array);
insertionSort(array);
console.log(array);
*/


// QUICK SORT //

/*
let array = [4, -1, -7, 12, 1, 7];

function quickSort(array){
    if(array.length < 2){
        return array;
    }
    let pivot = array[array.length - 1];
    let left = [];
    let right = [];

    for(let i = 0; i < array.length - 1; i++){
        if(array[i] < pivot){
            left.push(array[i]);
        }
        else{
            right.push(array[i]); 
        }
    }
    console.log(`Left: ${left}`);
    console.log(`Right: ${right}`);
    console.log(`...left, pivot, ...right: ${[...left, pivot, ...right]}`);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(array);
console.log(quickSort(array));
*/

// MERGE SORT //

