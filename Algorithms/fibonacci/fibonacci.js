
function fibb(number){
    let ans = [0, 1];

    if(number <= 1){
        return 0;
    }
    else if(number == 2){
        return 1;
    }
    else{
        for(let i = 2; i < number; i++){
            ans.push(ans[ans.length - 1] + ans[ans.length - 2]);
        }
        return ans[ans.length - 1];
    }
}


console.log(fibb(32));