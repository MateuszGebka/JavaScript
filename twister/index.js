
let currentPlayer = -1;
let names = [];
const input = document.getElementById("result");
const playerName = document.getElementById("name");
const titlePlayer = document.getElementById("name-select-h3");
const nameSelection = document.getElementById("name-select");
const startGameButton = document.getElementById("start-btn");

function startGame(){
    input.value = "lol";
}

function submitName(){
    if(names.length == 0){
        names.push(playerName.value);
        playerName.value = "";
        console.log(names);
        titlePlayer.textContent = "Player 2:";
    }
    else if(names.length == 1){
        names.push(playerName.value);
        console.log(names);
        nameSelection.style.display = "none";
        startGameButton.style.display = "flex";
    }
}