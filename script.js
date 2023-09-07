const cvv = document.querySelector("#cvv");
// const numberInput = document.getElementsByClassName("small-box");
const cardHolder = document.getElementById("cardholder");

const form = document.getElementById("form");

const err = document.getElementById("err");
const nameErr = document.getElementById("name-err");

document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.querySelector(".smallbox");
  numberInput.addEventListener("input", function () {
    const inputValue = numberInput.value;
    const numericValue = inputValue.replace(/[^0-9]/g, "");
    numberInput.value = numericValue;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.querySelector("#cardnumber2");
  numberInput.addEventListener("input", function () {
    const inputValue = numberInput.value;
    const numericValue = inputValue.replace(/[^0-9]/g, "");
    numberInput.value = numericValue;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.querySelector("#cardnumber3");
  numberInput.addEventListener("input", function () {
    const inputValue = numberInput.value;
    const numericValue = inputValue.replace(/[^0-9]/g, "");
    numberInput.value = numericValue;
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.querySelector("#cardnumber4");
  numberInput.addEventListener("input", function () {
    const inputValue = numberInput.value;
    const numericValue = inputValue.replace(/[^0-9]/g, "");
    numberInput.value = numericValue;
  });
});

function moveToNext(currentInput, nextInputId) {
  const inputValue = currentInput.value;
  if (inputValue.length === 4) {
    const nextInput = document.getElementById(nextInputId);
    if (nextInput) {
      nextInput.focus();
    }
  }
}

form.addEventListener("submit", (e) => {
  let cvvMessages = [];
  let nameMessage = [];

  if (cvv.value.length < 4 || cvv.value.length > 4) {
    cvvMessages.push("cvv must be 4 digit ");
  }
  if (cvvMessages.length > 0) {
    e.preventDefault();
    err.innerText = cvvMessages.join(", ");
  }
  const value = cardHolder.value.trim(); // Remove leading/trailing spaces
  const nameParts = value.split(" ");
  if (nameParts.length !== 2) {
    nameMessage.push("Enter both a firstName and a lastName");
  }
  if (nameMessage.length > 0) {
    e.preventDefault();
    nameErr.innerText = nameMessage.join(", ");
  }

  if ( numberInput !== " " && cardHolder !== " " && cvvHolder !== " "){

  alert('Your form has been submitted successfully');

}
});
