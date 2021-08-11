/* global $ */

$(() => {
  $("form#login-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 10,
      },
      password: {
        required: true,
        minlength: 8,
      },
    },
    messages: {
      username: {
        required: "Please enter a username",
        minlength: "Username must be at least 10 characters",
      },
      password: {
        required: "Please enter a password",
        minlength: "Password must be at least 8 characters",
      },
    },
    errorElement: "small",
    errorClass: "w-100 text-start text-danger",
    errorPlacement(error, element) {
      error.insertAfter($(element).siblings("label"));
    },
    highlight(element) {
      $(element).addClass("is-invalid");
    },
    unhighlight(element) {
      $(element).removeClass("is-invalid");
    },
  });
});
