// LINEAR SEARCH //

/*
arr = [-5, 2, 10, 4, 6];
t = 10;

function linearSearch(target, array){
    for(let i = 0; i < array.length; i++){
        if(array[i] == target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(t, arr));
*/

// BINARY SEARCH //

array = [1, 3, 4, 7, 9, 11, 21];
target = 11;

function binarySearch(target, array){
    let left = 0;
    let right = array.length - 1;
    while(left <= right){
        let middle = Math.floor((left + right)/2);
        if(array[middle] === target){
            return middle;
        }
        else if(array[middle] > target){
            right = middle - 1;
        }
        else if(array[middle] < target){
            left = middle + 1;
        }
    }
    return -1;
}

console.log(binarySearch(2, array));