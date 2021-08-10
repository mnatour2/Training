/* global $ */

$(() => {
  $(".select2-multiple").select2();

  $("form#movies-form").validate({
    rules: {
      movieName: {
        required: true,
      },
      year: {
        required: true,
        minlength: 4,
        maxlength: 4,
      },
      country: {
        required: true,
      },
    },
    messages: {
      movieName: {
        required: "Please enter a movie name",
      },
      year: {
        required: "Please enter year",
        minlength: "Year length must be 4",
        maxlength: "Year length must be 4",
      },
      country: {
        required: "Please enter a country",
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
