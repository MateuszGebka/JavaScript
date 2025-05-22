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

/*
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
*/

// RECURSIVE BINARY SEARCH //

/*
array = [1, 3, 4, 7, 9, 11, 21];
target = 11;

function RBS(target, array){
    return search(array, target, 0, array.length - 1);
}

function search(array, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    if(target === array[middleIndex]){
        return middleIndex;
    }

    if(target < array[middleIndex]){
        return search(array, target, leftIndex, middleIndex - 1);
    }
    else{
        return search(array, target, middleIndex+1, rightIndex);
    }
}

console.log(RBS(target, array));
console.log("lol");
*/


