const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });
const router = express.Router();
const { isUser } = require("./middlewares");

router.use(isUser);

router.get(
  "/movies/create",
  async (/** @type {express.Request} */ req, res, next) => {
    res.render("movies/create");
  }
);

router.post(
  "/movies/create",
  upload.single("poster"),
  async (/** @type {express.Request} */ req, res, next) => {
    try {
      const {
        body: { movieName, year, country },
        db,
        file: poster,
      } = req;

      await db("movies").insert({
        movie_name: movieName,
        year,
        country,
        poster: poster.path,
      });
      res.redirect("/movies");
    } catch (error) {
      next(error);
    }
  }
);

router.get("/movies", async (/** @type {express.Request} */ req, res, next) => {
  try {
    const results = await req
      .db("movies")
      .select("id", "movie_name", "year", "country", "poster");
    res.render("movies", { movies: results });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
