$().ready(function () {
  $("form#login-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
      },
      password: {
        required: true,
        minlength: 8,
      },
    },
    messages: {
      username: {
        required: "Please enter a username",
        minlength: "wrong username or password",
      },
      password: {
        required: "Please enter a password",
        minlength: "invalid username or password",
      },
    },
  });
});

// const loginForm = $("form#login-form");

// loginForm.on("submit", function (e) {
//   e.preventDefault();

//   const error_message = $("#usernamePasswordWrong2");
//   if (error_message) error_message.addClass("d-none");
//   const isUsernameValid = validateFieldLogin(
//     "floatingInput",
//     loginRegex,
//     "usernamePasswordWrong"
//   );
//   const isPasswordValid = validateFieldLogin(
//     "floatingPassword",
//     loginRegex,
//     "usernamePasswordWrong"
//   );

//   if (isUsernameValid && isPasswordValid) {
//     this.submit();
//   }
// });
