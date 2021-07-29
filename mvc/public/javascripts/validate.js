//username regex check if contains only letters and numbers and underscore
var usernameRegex = /^\w{10,30}$/;
// email regex check if contains dots and letters and ends with @vatrin.com
var emailRegex = /^[A-Za-z]+[A-Za-z\.]+$/;
//password regex check if have at least one lower case, one upper case, one digit and at least 8 length.
var passwordRegex =
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]{};':"\\\|,\.<>\/\?]).{8,}/;
//mobile regex check if start with 05 and have 8 numbers after 05.
var mobileRegex = /^\d{8}$/;
//login regex check if fields are empty
var loginRegex = /.{1,}/;
// email regex check if contains dots and letters and ends with @vatrin.com
var email_regex = /^[A-Za-z]+[A-Za-z\.]+(@vatrin\.com)$/g;
//mobile regex check if start with 05 and have 8 numbers after 05.
var mobile_regex = /^(05)\d{8}$/g;

function checkConfirmPassword(input1, input2, message) {
  const inputMessage = document.getElementById(message);
  const inputField = document.getElementById(input2);
  if (input1.value == input2.value) {
    inputField.classList.remove("is-invalid");
    inputField.classList.add("is-valid");
    inputMessage.classList.add("d-none");
    return true;
  } else {
    inputField.classList.remove("is-valid");
    inputField.classList.add("is-invalid");
    inputMessage.classList.remove("d-none");
    return false;
  }
}

function validateField(input, regex, message) {
  const inputMessage = document.getElementById(message);
  const inputField = document.getElementById(input);
  if (inputField.value.match(regex)) {
    inputField.classList.remove("is-invalid");
    inputField.classList.add("is-valid");
    inputMessage.classList.add("d-none");
    return true;
  } else {
    inputField.classList.remove("is-valid");
    inputField.classList.add("is-invalid");
    inputMessage.classList.remove("d-none");
    return false;
  }
}

function validateFieldLogin(input, regex, message) {
  const inputMessage = document.getElementById(message);
  const inputField = document.getElementById(input);
  if (inputField.value.match(regex)) {
    inputField.classList.remove("is-invalid");
    inputMessage.classList.add("d-none");
    return true;
  } else {
    inputField.classList.add("is-invalid");
    inputMessage.classList.remove("d-none");
    return false;
  }
}

// function clear(inputsAndMessages) {
//   inputsAndMessages.forEach(({ input, message }) => {
//     const inputMessage = document.getElementById(message);
//     const inputField = document.getElementById(input);

//     inputField.classList.remove("is-invalid");
//     inputField.classList.remove("is-valid");
//     inputMessage.classList.add("d-none");
//   });
// }
