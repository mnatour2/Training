const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });
const router = express.Router();
const { isUser } = require("./middlewares");

router.use(isUser);

router.get(
  "/movies/create",
  async (/** @type {express.Request} */ req, res, next) => {
    try {
      const results = await req.db("actors").select("id", "full_name");
      res.render("movies/create", { actors: results });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/movies/create",
  upload.single("poster"),
  async (/** @type {express.Request} */ req, res, next) => {
    try {
      const {
        body: { movieName, year, country, actors },
        db,
        file: poster,
      } = req;

      // Using trx as a query builder:
      await db.transaction(async (trx) => {
        const [movieId] = await trx
          .insert({
            movie_name: movieName,
            year,
            country,
            poster: poster.path,
          })
          .into("movies");

        await trx
          .insert(
            actors.map((actorId) => ({ actor_id: actorId, movie_id: movieId }))
          )
          .into("actors_movies");
      });

      res.redirect("/movies");
    } catch (error) {
      next(error);
    }
  }
);

router.get("/movies", async (/** @type {express.Request} */ req, res, next) => {
  try {
    // knex.select('*').from('users').join('accounts', function() {
    //   this.on(function() {
    //     this.on('accounts.id', '=', 'users.account_id')
    //     this.orOn('accounts.owner_id', '=', 'users.id')
    //   })
    // })
    let results = await req.db
      .select(
        "movies.id",
        "movie_name",
        "year",
        "country",
        "poster",
        "full_name"
      )
      .from("movies")
      // eslint-disable-next-line func-names
      .join("actors_movies", function () {
        this.on("movies.id", "=", "actors_movies.movie_id");
      })
      // eslint-disable-next-line func-names
      .join("actors", function () {
        this.on("actors_movies.actor_id", "=", "actors.id");
      });

    results = results.reduce((prev, curr) => {
      const duplicateMovie = prev.find((item) => item.id === curr.id);
      if (duplicateMovie) {
        duplicateMovie.full_name += `, ${curr.full_name}`;
      }

      return [...prev, curr];
    }, []);
    // TODO group concat knex
    res.render("movies", { movies: results });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
