//username regex check if contains only letters and numbers and underscore
var usernameRegex = /^\w{10,30}$/g;
// email regex check if contains dots and letters and ends with @vatrin.com
var emailRegex = /^[A-Za-z]+[A-Za-z\.]+(@vatrin\.com)$/g;
//password regex check if have at least one lower case, one upper case, one digit and at least 8 length.
var passwordRegex =
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]{};':"\\\|,\.<>\/\?]).{8,}/g;
//mobile regex check if start with 05 and have 8 numbers after 05.
var mobileRegex = /^(05)\d{8}$/g;

var usernameInput = document.getElementById("username");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirmPassword");
var mobileInput = document.getElementById("mobileNumber");

const usernameMessage = document.querySelector("#usernameMessage");
const emailMessage = document.querySelector("#emailMessage");
const passwordMessage = document.querySelector("#passwordMessage");
const confirmPasswordMessage = document.querySelector(
  "#confirmPasswordMessage"
);
const mobileMessage = document.querySelector("#mobileMessage");

//check if the input checks with the regex.
function CheckUsername() {
  if (this.value.match(usernameRegex)) {
    usernameMessage.style.display = "none";
  } else {
    usernameMessage.style.display = "block";
  }
}

//check if the input checks with the regex.
function CheckEmail() {
  if (this.value.match(emailRegex)) {
    emailMessage.style.display = "none";
  } else {
    emailMessage.style.display = "block";
  }
}

//check if the input checks with the regex.
function CheckPassword() {
  if (this.value.match(passwordRegex)) {
    passwordMessage.style.display = "none";
  } else {
    passwordMessage.style.display = "block";
  }
}

//check if the input checks with the first password input.
function CheckConfirmPassword() {
  if (this.value == passwordInput.value) {
    confirmPasswordMessage.style.display = "none";
  } else {
    confirmPasswordMessage.style.display = "block";
  }
}

//check if the input checks with the regex.
function CheckMobile() {
  if (this.value.match(mobileRegex)) {
    mobileMessage.style.display = "none";
  } else {
    mobileMessage.style.display = "block";
  }
}

usernameInput.oninput = CheckUsername;
passwordInput.oninput = CheckPassword;

if (emailInput) {
  emailInput.oninput = CheckEmail;
  confirmPasswordInput.oninput = CheckConfirmPassword;
  mobileInput.oninput = CheckMobile;
}

function myValidation()
{
   if(usernameInput)
   {
      alert("Oops! Validation failed!");
      return false;
   }
   alert("Validations successful!");
   return true;
}
