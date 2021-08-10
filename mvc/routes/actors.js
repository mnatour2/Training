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
  "/actors/create",
  async (/** @type {express.Request} */ req, res, next) => {
    res.render("actors/create");
  }
);

router.post(
  "/actors/create",
  upload.single("image"),
  async (/** @type {express.Request} */ req, res, next) => {
    try {
      const {
        body: { fullName, dateOfBirth },
        db,
        file: image,
      } = req;

      await db("actors").insert({
        full_name: fullName,
        date_of_birth: dateOfBirth,
        image: image.path,
      });
      res.redirect("/actors");
    } catch (error) {
      next(error);
    }
  }
);

router.get("/actors", async (/** @type {express.Request} */ req, res, next) => {
  try {
    const results = await req
      .db("actors")
      .select("id", "full_name", "date_of_birth", "image");
    results.map((actor) => {
      actor.date_of_birth = actor.date_of_birth.toDateString();
      return actor;
    });
    res.render("actors", { actors: results });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
