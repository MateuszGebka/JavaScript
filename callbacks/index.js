sum(displayPage, 1, 2);
sum(displayPage, 41, 42);
sum(displayPage, 111, -2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}


function displayPage(result){
    document.getElementById("myH1").textContent = result;
}