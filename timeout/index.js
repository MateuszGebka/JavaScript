
let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("cleared");
}