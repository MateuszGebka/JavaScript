
const myBtn = document.getElementById("myBtn");

myBtn.classList.add("enabled");
myBtn.classList.remove("enabled");


myBtn.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover")
});

myBtn.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover")
});