const myCheckedBox = document.getElementById(`myCheckedBox`);
const visBtn = document.getElementById(`visBtn`);
const masterCard = document.getElementById(`masterCard`);
const paypalBtn = document.getElementById(`paypalBtn`);
const mySubmit = document.getElementById(`mySubmit`);
const subResult = document.getElementById(`subResult`);
const paymentResult = document.getElementById(`paymentResult`);

mySubmit.onclick = function(){
    if(myCheckedBox.checked){
        subResult.textContent = `Subscribed!`;
    }
    else{
        subResult.textContent = `Not subscribed!`;
    }

    if(visBtn.checked){
        paymentResult.textContent = `Paying with Visa`;
    }
    else if(masterCard.checked){
        paymentResult.textContent = `Paying with masetrdcard`;
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `Paying with paypal`;
    }
    else{
        paymentResult.textContent = `Select a payment type`;
    }
}


