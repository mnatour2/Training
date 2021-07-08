const loginForm = document.querySelector("form#login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  validateField("floatingInput", loginRegex, "usernamePasswordWrong");
  validateField("floatingPassword", loginRegex, "usernamePasswordWrong");
});
