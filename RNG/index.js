const rngBtn = document.getElementById(`rngBtn`);
const randomLabel = document.getElementById(`randomLabel`);
let random;

rngBtn.onclick = function() {
    random = Math.floor(Math.random() * 10) + 1;
    randomLabel.textContent = random;
}