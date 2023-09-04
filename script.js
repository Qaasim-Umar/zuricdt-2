const cvv = document.getElementById("cvv");
const cardNumber = document.getElementById("cardnumber");
const cardHolder = document.getElementById("cardholder");

const form = document.getElementById("form");

const err = document.getElementById("err");



form.addEventListener("submit", (e) => {
let messages = []

if(cvv.value.length < 4 || cvv.value.length > 4) {

    messages.push('cvv must be 4 digit ')

}
    if (messages.length > 0) {

  e.preventDefault();
err.innerText = messages.join(', ')
    

}
});
