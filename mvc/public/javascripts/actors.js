/* global $ */

$(() => {
  $("form#actors-form").validate({
    rules: {
      fullName: {
        required: true,
      },
      dateOfBirth: {
        required: true,
      },
    },
    messages: {
      fullName: {
        required: "Please enter a full name",
      },
      dateOfBirth: {
        required: "Please enter a date of birth",
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
