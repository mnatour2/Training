const loginForm = document.querySelector("form#login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let error_message = document.getElementById("usernamePasswordWrong2");
  if (error_message) error_message.classList.add("d-none");
  const isUsernameValid = validateFieldLogin(
    "floatingInput",
    loginRegex,
    "usernamePasswordWrong"
  );
  const isPasswordValid = validateFieldLogin(
    "floatingPassword",
    loginRegex,
    "usernamePasswordWrong"
  );

  if (isUsernameValid && isPasswordValid) {
    this.submit();
  }
});
