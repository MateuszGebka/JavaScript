

let buttons = document.querySelectorAll(".buttons");

console.log(buttons);

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "LoL";
});