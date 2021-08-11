/* global $ */

$(() => {
  $("form#actors-form").validate({
    rules: {
      fullName: {
        required: true,
        minlength: 5,
        maxlength: 100,
      },
      dateOfBirth: {
        required: true,
      },
      image: {
        required: true,
        extension: "png|jpg|jpeg",
      },
    },
    messages: {
      fullName: {
        required: "Please enter a full name",
        minlength: "Full name must be at least 5 characters",
        maxlength: "Full name must be at most 100 characters",
      },
      dateOfBirth: {
        required: "Please enter a date of birth",
      },
      image: {
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
