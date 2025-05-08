
const myBtn = document.getElementById("myBtn");

myBtn.classList.add("enabled");
myBtn.classList.remove("enabled");


myBtn.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover")
});

myBtn.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover")
});

myBtn.classList.add("enabled");

myBtn.addEventListener("click", event => {
    if(event.target.classList.contains("enabled")) {
        event.target.classList.replace("enabled", "disabled");
    }
    else {
        event.target.classList.replace("disabled", "enabled");
    }

});


let buttons = document.querySelectorAll(".myBtns");

buttons.forEach(button => {
    button.classList.add("enabled");
});


buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("enabled")) {
            event.target.classList.replace("enabled", "disabled");
        }
        else {
            event.target.classList.replace("disabled", "enabled");
        }
    })
});