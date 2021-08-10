/* global $ */

function toggleFav(movieId) {
  $.ajax({
    type: "POST",
    url: `/movies/${movieId}/favorite`,
    success: () => {
      $(`#heartNotFill[data-movie-id="${movieId}"]`).css("display", "none");
      $(`#heartFill[data-movie-id="${movieId}"]`).css("display", "block");
    },
  });
}
