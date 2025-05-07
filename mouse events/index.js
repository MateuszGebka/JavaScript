
const myBox = document.getElementById("myBox");


myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "yellow";   
    event.target.textContent = "Ouch"; 
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "green";
})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
})