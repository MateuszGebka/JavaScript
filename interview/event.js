const counter = document.getElementById("counter");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
const toggle = document.getElementById("toggle-theme");
const colorBox = document.getElementById("color-box");
const keyPress = document.getElementById("keypress");

let darkTheme = false;

inc.addEventListener("click", event => {
    const currentNumber = counter.textContent;
    let currNum = parseInt(currentNumber);
    currNum += 1;
    counter.textContent = currNum;
});

dec.addEventListener("click", event => {
    const currentNumber = counter.textContent;
    let currNum = parseInt(currentNumber);
    currNum -= 1;
    counter.textContent = currNum;
});

reset.addEventListener("click", event => {
    counter.textContent = "0";
});

toggle.addEventListener("click", event => {
    if(!darkTheme){
        document.body.style.backgroundColor = "grey";
        darkTheme = true;
    }
    else{
        document.body.style.backgroundColor = "white";
        darkTheme = false;
    }
});

const randomColors = ["blue", "green", "yellow", "red", "black", "pink"];

colorBox.addEventListener("mouseover", event => {
    const rand = Math.floor(Math.random() * randomColors.length);
    colorBox.style.backgroundColor = `${randomColors[rand]}`;
    console.log(rand);
});

document.addEventListener("keypress", event => {
    keyPress.textContent = event.key;
});

console.log("lol");