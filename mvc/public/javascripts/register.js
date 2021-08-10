/* global $ */

$(() => {
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
        equalTo: "#registerPassword",
      },
      mobile: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      picture: {
        required: true,
        extension: "png|jpg|jpeg",
      },
    },
    messages: {
      username: {
        required: "Please enter a username",
        minlength:
          "Username must contain numbers, letters, underscore and between 10-30 characters.",
      },
      email: {
        required: "Please enter a email",
        // Email must contain letters, dots and ends with @vatrin.com
      },
      password: {
        required: "Please enter a password",
        minlength: "Password must be at least 8 characters",
        // "Password must contain the following: A lowercase letter, A capital (uppercase) letter, A number, Minimum 8 characters.",
      },
      confirmPassword: {
        required: "Please re-enter the password",
        equalTo: "Passwords don't match",
      },
      mobile: {
        required: "Please enter a mobile number",
        minlength: "Mobile must start with 05 and 8 numbers after it.",
        maxlength: "Mobile must start with 05 and 8 numbers after it.",
      },
      picture: {
        required: "Please enter a poster",
        extension: "Please enter a image file",
      },
    },
    errorElement: "small",
    errorClass: "w-100 text-start text-danger",
    errorPlacement(error, element) {
      error.insertAfter($(element));
    },
    highlight(element) {
      $(element).addClass("is-invalid");
    },
    unhighlight(element) {
      $(element).removeClass("is-invalid");
    },
  });
});
