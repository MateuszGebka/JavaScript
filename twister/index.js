
let currentPlayer = -1;
let names = [];
const input = document.getElementById("result");
const playerName = document.getElementById("name");

function startGame(){
    input.value = "lol";
}

function submitName(){
    if(names.length == 0){
        names.push(playerName.value);
        playerName.value = "";
        console.log(names);
    }
}