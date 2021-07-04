var myInput = document.getElementById("password");
var passw = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
const passwordMessage = document.querySelector('#message');

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  document.getElementById("message").style.display = "block";
};

function CheckPassword() {
  if (this.value.match(passw)) {
    document.getElementById("message").setAttribute;
    passwordMessage.style.color = 'green';
    // myInput.style.borderColor = 'green';
    return true;
  } else {
    passwordMessage.style.color = 'red';
    // myInput.style.borderColor = 'red';
    return false;
  }
}
myInput.oninput = CheckPassword;
