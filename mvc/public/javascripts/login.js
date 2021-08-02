const loginForm = $("form#login-form");

loginForm.on("submit", function (e) {
  e.preventDefault();

  const error_message = $("#usernamePasswordWrong2");
  if (error_message) error_message.addClass("d-none");
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
