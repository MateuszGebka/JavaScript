

let buttons = document.querySelectorAll(".buttons");

console.log(buttons);

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "LoL";
});


buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.style.backgroundColor === "tomato"){
            event.target.style.backgroundColor = "blue";
        }
        else{
            event.target.style.backgroundColor = "tomato";
        }
    });
});


const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "buttons";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".buttons");
console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".buttons");
        console.log(buttons);
    });
});
