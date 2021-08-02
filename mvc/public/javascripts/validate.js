//username regex check if contains only letters and numbers and underscore
const usernameRegex = /^\w{10,30}$/;
// email regex check if contains dots and letters and ends with @vatrin.com
const emailRegex = /^[A-Za-z]+[A-Za-z\.]+$/;
//password regex check if have at least one lower case, one upper case, one digit and at least 8 length.
const passwordRegex =
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]{};':"\\\|,\.<>\/\?]).{8,}/;
//mobile regex check if start with 05 and have 8 numbers after 05.
const mobileRegex = /^\d{8}$/;
//login regex check if fields are empty
const loginRegex = /.{1,}/;
// email regex check if contains dots and letters and ends with @vatrin.com
const email_regex = /^[A-Za-z]+[A-Za-z\.]+(@vatrin\.com)$/g;
//mobile regex check if start with 05 and have 8 numbers after 05.
const mobile_regex = /^(05)\d{8}$/g;

function checkConfirmPassword(input1, input2, message) {
  const inputMessage = $("#" + message);
  if (input1.val() == input2.val()) {
    input2.removeClass("is-invalid");
    input2.addClass("is-valid");
    inputMessage.addClass("d-none");
    return true;
  } else {
    input2.removeClass("is-valid");
    input2.addClass("is-invalid");
    inputMessage.removeClass("d-none");
    return false;
  }
}

function validateField(input, regex, message) {
  const inputMessage = $("#" + message);
  const inputField = $("#" + input);
  if (inputField.val().match(regex)) {
    inputField.removeClass("is-invalid");
    inputField.addClass("is-valid");
    inputMessage.addClass("d-none");
    return true;
  } else {
    inputField.removeClass("is-valid");
    inputField.addClass("is-invalid");
    inputMessage.removeClass("d-none");
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

function clear(inputsAndMessages) {
  inputsAndMessages.forEach(({ input, message }) => {
    const inputMessage = document.getElementById(message);
    const inputField = document.getElementById(input);

    inputField.classList.remove("is-invalid");
    inputField.classList.remove("is-valid");
    inputMessage.classList.add("d-none");
  });
}
