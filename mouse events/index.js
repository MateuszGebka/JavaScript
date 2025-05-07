
const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", event => {
    myBox.style.backgroundColor = "yellow";   
    myBox.textContent = "Ouch"; 
});

myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "green";
    myBox.textContent = "Dont do it";
})

myBtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me";
})

