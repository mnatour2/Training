const express = require("express");

const router = express.Router();
const { isUser } = require("./middlewares");

router.use(isUser);

router.get("/actors", async (/** @type {express.Request} */ req, res, next) => {
  try {
    const results = await req
      .db("actors")
      .select("id", "full_name", "date_of_birth", "mobile", "image");
    res.render("actors", { actors: results });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
