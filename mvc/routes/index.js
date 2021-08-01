var express = require("express");
const { pbkdf2Sync } = require("crypto");
const { isGuest } = require("./middlewares");
var router = express.Router();

router.get("/register", isGuest, function (req, res, next) {
  res.render("register");
});

router.get("/login", isGuest, function (req, res, next) {
  res.render("login", { failed: req.session.loginFailed });
  req.session.loginFailed = false;
});

router.post("/register", isGuest, async function (req, res, next) {
  try {
    const {
      body: { username, password, confirmPassword, email, mobile },
      db,
    } = req;
    const derivedKey = pbkdf2Sync(password, username, 10000, 32, "sha512");
    const hash_password = derivedKey.toString("hex");
    await db("users").insert(
      { username: username },
      { password: hash_password },
      { email: email },
      { mobile: mobile }
    );

    res.redirect("index", {
      username,
      password,
      confirmPassword,
      email,
      mobile,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/login", isGuest, async function (req, res, next) {
  try {
    const {
      body: { username, password },
      db,
    } = req;

    const user = await db("users")
      .select("username", "password")
      .where("username", username)
      .first();

    if (user) {
      const derivedKey = pbkdf2Sync(password, username, 10000, 32, "sha512");
      hash_password = derivedKey.toString("hex");
      if (hash_password == user.password) {
        req.session.loggedin = true;
        res.redirect("home");
        return;
      }
    }

    req.session.loginFailed = true;
    res.redirect("/login");
  } catch (error) {
    next(error);
  }
});

router.get("/home", (req, res, next) => {
  res.render("home");
});

module.exports = router;
