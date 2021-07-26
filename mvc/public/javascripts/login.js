const loginForm = document.querySelector("form#login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const isValid =
    validateField("floatingInput", loginRegex, "usernamePasswordWrong") &&
    validateField("floatingPassword", loginRegex, "usernamePasswordWrong");

  if (isValid) {
    this.submit();
  }
});
