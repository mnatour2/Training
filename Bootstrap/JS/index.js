//username regex check if contains only letters and numbers and underscore
var usernameRegex = /^\w{10,30}$/;
// email regex check if contains dots and letters and ends with @vatrin.com
var emailRegex = /^[A-Za-z]+[A-Za-z\.]+$/;
//password regex check if have at least one lower case, one upper case, one digit and at least 8 length.
var passwordRegex =
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]{};':"\\\|,\.<>\/\?]).{8,}/;
//mobile regex check if start with 05 and have 8 numbers after 05.
var mobileRegex = /^\d{8}$/;

const registerForm = document.querySelector("form#register-form");
const loginForm = document.querySelector("form#login-form");

if (registerForm) {
  var usernameInput = document.getElementById("validationTooltipUsername");
  var emailInput = document.getElementById("validationTooltip01");
  var passwordInput = document.getElementById("validationTooltip02");
  var confirmPasswordInput = document.getElementById("validationTooltip03");
  var mobileInput = document.getElementById("validationTooltip04");

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    validateField(usernameInput, usernameRegex);
    validateField(emailInput, emailRegex);
    validateField(passwordInput, passwordRegex);
    checkConfirmPassword(passwordInput, confirmPasswordInput);
    validateField(mobileInput, mobileRegex);
  });
}

if (loginForm) {
  var usernameInput = document.getElementById("floatingInput");
  var emailInput = document.getElementById("floatingPassword");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    validateField(floatingInput, usernameRegex);
    validateField(floatingPassword, passwordRegex);
  });
}

function checkConfirmPassword(input1, input2) {
  if (input1.value == input2.value) {
    input2.classList.remove("is-invalid");
    input2.classList.add("is-valid");
  } else {
    input2.classList.remove("is-valid");
    input2.classList.add("is-invalid");
  }
}

function validateField(inputField, regex) {
  if (inputField.value.match(regex)) {
    inputField.classList.remove("is-invalid");
    inputField.classList.add("is-valid");
  } else {
    inputField.classList.remove("is-valid");
    inputField.classList.add("is-invalid");
  }
}

// const usernameMessage = document.querySelector("#usernameMessage");
// const emailMessage = document.querySelector("#emailMessage");
// const passwordMessage = document.querySelector("#passwordMessage");
// const confirmPasswordMessage = document.querySelector(
//   "#confirmPasswordMessage"
// );
// const mobileMessage = document.querySelector("#mobileMessage");
