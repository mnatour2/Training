$().ready(function () {
  $("form#register-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 10,
        maxlength: 30,
      },
      email: {
        required: true,
      },
      password: {
        required: true,
        minlength: 8,
      },
      confirmPassword: {
        required: true,
        minlength: 8,
        equalTo: "#validationTooltip02",
      },
      mobile: {
        required: true,
        minlength: 8,
        maxlength: 8,
      },
    },
    messages: {
      username: {
        required: "Please enter a username",
        minlength: "Invalid username",
      },
      email: {
        required: "Please enter a email",
      },
      password: {
        required: "Please enter a password",
        minlength: "Invalid password",
      },
      confirmPassword: {
        required: "Please confirm the password",
        minlength: "Invalid password",
        equalTo: "Please match the passwords",
      },
      mobile: {
        required: "Please enter a password",
        minlength: "Invalid mobile",
        maxlength: "Invalid mobile",
      },
    },
  });
});

// const registerForm = $("form#register-form");

// registerForm.on("submit", function (e) {
//   e.preventDefault();
//   const isUsernameValid = validateField(
//     "validationTooltipUsername",
//     usernameRegex,
//     "usernameErrorMessage"
//   );
//   const isEmailValid = validateField(
//     "validationTooltip01",
//     emailRegex,
//     "emailErrorMessage"
//   );
//   const isPasswordValid = validateField(
//     "validationTooltip02",
//     passwordRegex,
//     "passwordErrorMessage"
//   );
//   const isConfirmPasswordValid = checkConfirmPassword(
//     $("#validationTooltip02"),
//     $("#validationTooltip03"),
//     "confrimPasswordErrorMessage"
//   );
//   const isMobileValid = validateField(
//     "validationTooltip04",
//     mobileRegex,
//     "mobileErrorMessage"
//   );

//   if (
//     isUsernameValid &&
//     isEmailValid &&
//     isPasswordValid &&
//     isConfirmPasswordValid &&
//     isMobileValid
//   ) {
//     $("#validationTooltip01").val(
//       $("#validationTooltip01").val() + "@vatrin.com"
//     );
//     $("#validationTooltip04").val("05" + $("#validationTooltip04").val());
//     this.submit();
//   }
// });
