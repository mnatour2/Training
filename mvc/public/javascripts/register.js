const registerForm = $("form#register-form");

registerForm.on("submit", function (e) {
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
    $("#validationTooltip02"),
    $("#validationTooltip03"),
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
    $("#validationTooltip01").val(
      $("#validationTooltip01").val() + "@vatrin.com"
    );
    $("#validationTooltip04").val("05" + $("#validationTooltip04").val());
    this.submit();
  }
});
