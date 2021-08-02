var express = require("express");
var router = express.Router();
const { isUser } = require("./middlewares");

router.use(isUser);

router.get("/users", async function (req, res, next) {
  try {
    const results = await req
      .db("users")
      .select("id", "username", "email", "mobile");
    res.render("users", { users: results });
  } catch (error) {
    next(error);
  }
});

router.get("/users/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const user = await req
      .db("users")
      .select("username", "email", "mobile")
      .where("id", id)
      .first();
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else res.json(user);
  } catch (error) {
    next(error);
  }
});

router.patch("/users/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const isUpdated = await req.db("users").where("id", id).update({
      username: req.body.username,
      email: req.body.email,
      mobile: req.body.mobile,
    });
    const user = await req
      .db("users")
      .where("id", id)
      .select("id", "username", "email", "mobile")
      .first();
    res.status(isUpdated ? 200 : 404).json(user);
  } catch (error) {
    next(error);
  }
});

router.delete("/users/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const isDeleted = await req.db("users").where("id", id).del();
    res.sendStatus(isDeleted ? 204 : 404);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
