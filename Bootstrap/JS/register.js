const registerForm = document.querySelector("form#register-form");

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
