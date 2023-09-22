


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

  const cardHolder = document.getElementById("cardholder").value;
  const cvv = document.querySelector("#cvv").value;
  const dropdown = document.querySelectorAll("#dropdown").value;


  let cvvMessages = [];
  let nameMessage = [];

  if (cvv.length < 4 || cvv.length > 4) {
    cvvMessages.push("cvv must be 4 digit ");
  }
  if (cvvMessages.length > 0) {
    e.preventDefault();
    err.innerText = cvvMessages.join(", ");
  }
  const value = cardHolder.trim(); // Remove leading/trailing spaces
  const nameParts = value.split(" ");
  if (nameParts.length !== 2) {
    nameMessage.push("Enter both a firstName and a lastName");
  }
  if (nameMessage.length > 0) {
    e.preventDefault();
    nameErr.innerText = nameMessage.join(", ");
  }



  if (
    cardHolder !== "" &&
    cvv !== "" &&
    dropdown !== "" 
  ) {
    alert("Your payment was successful");
    document.getElementById("Form").reset();
    
  }
  e.preventDefault();


 
});






// document.getElementById("form").addEventListener("submit", function(event) {
//   // Add your form validation logic here
//   var cvv = document.getElementById("cvv").value;
//   var cardHolder = document.getElementById("cardholder").value;

//   // For example, you can check if the name and email fields are not empty
//   if ( cvv !== "" && cardHolder !== "") {
//       // Form submission is successful
//       alert("Form submitted successfully!");

//       // Reset the form to clear the input fields
//       
//   } else {
//       // Form submission has an error, you can display an error message
//       alert("Please fill in all fields.");
//   }

//   event.preventDefault(); // Prevent the default form submission
// });
