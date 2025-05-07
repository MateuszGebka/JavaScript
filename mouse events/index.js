
const myBox = document.getElementById("myBox");


myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "yellow";   
    event.target.textContent = "Ouch"; 
});