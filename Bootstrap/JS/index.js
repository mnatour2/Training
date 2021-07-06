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

  const usernameMessage = document.querySelector("#usernameErrorMessage");
  const emailMessage = document.querySelector("#emailErrorMessage");
  const passwordMessage = document.querySelector("#passwordErrorMessage");
  const confirmPasswordMessage = document.querySelector(
    "#confrimPasswordErrorMessage"
  );
  const mobileMessage = document.querySelector("#mobileErrorMessage");

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    validateField(usernameInput, usernameRegex, usernameMessage);
    validateField(emailInput, emailRegex, emailMessage);
    const isPasswordValid = validateField(
      passwordInput,
      passwordRegex,
      passwordMessage
    );
    if (isPasswordValid)
      checkConfirmPassword(
        passwordInput,
        confirmPasswordInput,
        confirmPasswordMessage
      );
    validateField(mobileInput, mobileRegex, mobileMessage);
  });
}

if (loginForm) {
  var usernameInput = document.getElementById("floatingInput");
  var emailInput = document.getElementById("floatingPassword");

  const message = document.querySelector("#usernamePasswordWrong");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    validateField(floatingInput, usernameRegex, message);
    validateField(floatingPassword, passwordRegex, message);
  });
}

function checkConfirmPassword(input1, input2, message) {
  if (input1.value == input2.value) {
    input2.classList.remove("is-invalid");
    input2.classList.add("is-valid");
    message.classList.add("d-none");
  } else {
    input2.classList.remove("is-valid");
    input2.classList.add("is-invalid");
    message.classList.remove("d-none");
  }
}

function validateField(inputField, regex, message) {
  if (inputField.value.match(regex)) {
    inputField.classList.remove("is-invalid");
    inputField.classList.add("is-valid");
    message.classList.add("d-none");
    return true;
  } else {
    inputField.classList.remove("is-valid");
    inputField.classList.add("is-invalid");
    message.classList.remove("d-none");
    return false;
  }
}
