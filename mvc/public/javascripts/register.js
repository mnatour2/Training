const registerForm = document.querySelector("form#register-form");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const isValid =
    validateField(
      "validationTooltipUsername",
      usernameRegex,
      "usernameErrorMessage"
    ) && validateField("validationTooltip01", emailRegex, "emailErrorMessage");
  validateField("validationTooltip02", passwordRegex, "passwordErrorMessage") &&
    checkConfirmPassword(
      "validationTooltip02",
      "validationTooltip03",
      "confrimPasswordErrorMessage"
    ) &&
    validateField("validationTooltip04", mobileRegex, "mobileErrorMessage");

  if (isValid) {
    const email = document.getElementById("validationTooltip01");
    email.value = email.value + "@vatrin.com";
    const mobile = document.getElementById("validationTooltip04");
    mobile.value = "05" + mobile.value;
    this.submit();
  }
});
