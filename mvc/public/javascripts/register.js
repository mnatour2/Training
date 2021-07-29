const registerForm = document.querySelector("form#register-form");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const isUsernameValid = validateField(
    "validationTooltipUsername",
    usernameRegex,
    "usernameErrorMessage"
  );
  const isEmailValid = validateField(
    "validationTooltip01",
    emailRegex,
    "emailErrorMessage"
  );
  const isPasswordValid = validateField(
    "validationTooltip02",
    passwordRegex,
    "passwordErrorMessage"
  );
  const isConfirmPasswordValid = checkConfirmPassword(
    "validationTooltip02",
    "validationTooltip03",
    "confrimPasswordErrorMessage"
  );
  const isMobileValid = validateField(
    "validationTooltip04",
    mobileRegex,
    "mobileErrorMessage"
  );

  if (
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isMobileValid
  ) {
    const email = document.getElementById("validationTooltip01");
    email.value = email.value + "@vatrin.com";
    const mobile = document.getElementById("validationTooltip04");
    mobile.value = "05" + mobile.value;
    this.submit();
  }
});
