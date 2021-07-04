var passw = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/; //password regex check if have at least one lower case, one upper case, one digit and at least 8 length.
var usern = /(?=.*[A-Za-z0-9_]).{10,30}/; //username regex check if contains only letters and numbers and underscore 
//TODO REGEX IS WRONG FIX IT
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirmPassword");
const usernameMessage = document.querySelector("#usernameMessage");
const passwordMessage = document.querySelector("#passwordMessage");
const confirmPasswordMessage = document.querySelector(
  "#confirmPasswordMessage"
);

function CheckUsername() {
  if (this.value.match(usern)) {
    usernameMessage.style.display = "none";
  } else {
    usernameMessage.style.display = "block";
  }
}

usernameInput.oninput = CheckUsername;

//check if the input checks with the regex.
function CheckPassword() {
  if (this.value.match(passw)) {
    document.getElementById("passwordMessage").style.display = "none";
  } else {
    document.getElementById("passwordMessage").style.display = "block";
  }
}

passwordInput.oninput = CheckPassword;

//check if the input checks with the first password input.
function CheckConfirmPassword() {
  if (this.value == passwordInput.value) {
    document.getElementById("confirmPasswordMessage").style.display = "none";
  } else {
    document.getElementById("confirmPasswordMessage").style.display = "block";
  }
}

confirmPasswordInput.oninput = CheckConfirmPassword;
