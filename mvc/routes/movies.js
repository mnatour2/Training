const express = require("express");
const multer = require("multer");

const upload = multer({
  dest: "uploads/",
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      return cb(null, true);
    }
    cb(null, false);
    return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
  },
});
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
    const {
      session: { userId },
    } = req;
    const results = await req.db
      .select(
        "movies.id",
        "movie_name",
        "year",
        "country",
        "poster",
        req.db.raw('group_concat(full_name separator ", ") as actors'),
        req.db.raw(`coalesce(
          (select distinct true from users_favorites where movie_id = movies.id and user_id = '${userId}'), false) fav`)
      )
      .from("movies")
      .innerJoin("actors_movies", "movies.id", "actors_movies.movie_id")
      .innerJoin("actors", "actors_movies.actor_id", "actors.id")
      .groupBy("movies.id");

    res.render("movies", { movies: results });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/movies/:id/favorite",
  async (/** @type {express.Request} */ req, res, next) => {
    try {
      const {
        session: { userId },
        params: { id },
      } = req;

      const [isFavorite] = await req
        .db("users_favorites")
        .where({ movie_id: id, user_id: userId });

      if (isFavorite) {
        await req
          .db("users_favorites")
          .where({ movie_id: id, user_id: userId })
          .del();
      } else {
        await req.db("users_favorites").insert({
          user_id: userId,
          movie_id: id,
        });
      }

      res.status(200).json({
        isFavorite: !isFavorite,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/movies/favorites",
  async (/** @type {express.Request} */ req, res, next) => {
    try {
      const {
        session: { userId },
      } = req;
      const results = await req.db
        .select(
          "movies.id",
          "movie_name",
          "year",
          "country",
          "poster",
          req.db.raw('group_concat(full_name separator ", ") as actors'),
          req.db.raw(`coalesce(
            (select distinct true from users_favorites where movie_id = movies.id and user_id = '${userId}'), false) fav`)
        )
        .from("movies")
        .innerJoin("actors_movies", "movies.id", "actors_movies.movie_id")
        .innerJoin("actors", "actors_movies.actor_id", "actors.id")
        .innerJoin("users_favorites", "movies.id", "users_favorites.movie_id")
        .where("users_favorites.user_id", userId)
        .groupBy("movies.id");

      res.render("movies", { movies: results });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
