const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });
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
    res.render("actors", { actors: results });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
