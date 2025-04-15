
let currentPlayer = -1;
let names = [];
const input = document.getElementById("result");
const playerName = document.getElementById("name");
const titlePlayer = document.getElementById("name-select-h3");
const nameSelection = document.getElementById("name-select");
const startGameButton = document.getElementById("start-btn");
const playersNames = document.getElementById("playersNames");

const colors = ["Green", "Yellow", "Blue", "Red"];
const part = ["Left arm", "Right arm", "Left leg", "Right leg"];

let currentColor = -1;
let currentPart = -1;


function startGame(){
    input.textContent = "Game starts now!";
    currentPlayer = Math.floor(Math.random() * 2);
    setInterval(() => {
        currentColor = Math.floor(Math.random() * 4);
        currentPart = Math.floor(Math.random() * 4);
        input.textContent = `${names[currentPlayer]} - ${part[currentPart]} - ${colors[currentColor]}`;
        if(currentPlayer == 1){
            currentPlayer = 0;
        }
        else{
            currentPlayer++;
        }
    }, 3000);
}

function submitName(){
    if(names.length == 0){
        if(playerName.value === ""){
            names.push("Player 1");
        }
        else{
            names.push(playerName.value);
        }
        playerName.value = "";
        console.log(names);
        titlePlayer.textContent = "Player 2:";
    }
    else if(names.length == 1){
        if(playerName.value === ""){
            names.push("Player 2");
        }
        else{
            names.push(playerName.value);
        }
        console.log(names);
        nameSelection.style.display = "none";
        startGameButton.style.display = "flex";
    }
}