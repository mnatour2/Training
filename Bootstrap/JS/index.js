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
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    validateField(
      "validationTooltipUsername",
      usernameRegex,
      "usernameErrorMessage"
    );
    validateField("validationTooltip01", emailRegex, "emailErrorMessage");
    const isPasswordValid = validateField(
      "validationTooltip02",
      passwordRegex,
      "passwordErrorMessage"
    );
    if (isPasswordValid)
      checkConfirmPassword(
        "validationTooltip02",
        "validationTooltip03",
        "confrimPasswordErrorMessage"
      );
    validateField("validationTooltip04", mobileRegex, "mobileErrorMessage");
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    validateField("floatingInput", usernameRegex, "usernamePasswordWrong");
    validateField("floatingPassword", passwordRegex, "usernamePasswordWrong");
  });
}

function checkConfirmPassword(input1, input2, message) {
  const inputMessage = document.getElementById(message);
  const inputField = document.getElementById(input2);
  if (input1.value == input2.value) {
    inputField.classList.remove("is-invalid");
    inputField.classList.add("is-valid");
    inputMessage.classList.add("d-none");
  } else {
    inputField.classList.remove("is-valid");
    inputField.classList.add("is-invalid");
    inputMessage.classList.remove("d-none");
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
