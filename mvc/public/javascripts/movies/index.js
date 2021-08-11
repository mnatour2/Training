/* global $ */

function toggleFav(movieId) {
  $.ajax({
    type: "POST",
    url: `/movies/${movieId}/favorite`,
    success: (data) => {
      if (data.isFavorite) {
        $(`#heartFill[data-movie-id="${movieId}"]`).removeClass("d-none");
        $(`#heartNotFill[data-movie-id="${movieId}"]`).addClass("d-none");
      } else {
        $(`#heartNotFill[data-movie-id="${movieId}"]`).removeClass("d-none");
        $(`#heartFill[data-movie-id="${movieId}"]`).addClass("d-none");
      }
    },
  });
}
