// BUBBLE SORT //

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