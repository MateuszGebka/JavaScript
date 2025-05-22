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