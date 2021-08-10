const express = require("express");
const multer = require("multer");
const { pbkdf2Sync } = require("crypto");
const { isGuest, isUser } = require("./middlewares");

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

router.get("/register", isGuest, (req, res, next) => {
  res.render("register");
});

router.get("/login", isGuest, (req, res, next) => {
  res.render("login", { failed: req.session.loginFailed });
  req.session.loginFailed = false;
});

router.get("/logout", isUser, (req, res, next) =>
  req.session.destroy((err) => {
    if (err) next(err);
    else res.redirect("/login");
  })
);

router.post(
  "/register",
  isGuest,
  upload.single("picture"),
  async (/** @type {express.Request} */ req, res, next) => {
    try {
      const {
        body: { username, password, confirmPassword, email, mobile },
        db,
        file: picture,
      } = req;

      const derivedKey = pbkdf2Sync(password, username, 10000, 32, "sha512");
      const hashPassword = derivedKey.toString("hex");
      await db("users").insert({
        username,
        password: hashPassword,
        email,
        mobile,
        picture: picture.path,
      });

      res.redirect("/login");
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/login",
  isGuest,
  async (/** @type {express.Request} */ req, res, next) => {
    try {
      const {
        body: { username, password },
        db,
      } = req;

      const user = await db("users")
        .select("id", "username", "password")
        .where("username", username)
        .first();

      if (user) {
        const derivedKey = pbkdf2Sync(password, username, 10000, 32, "sha512");
        const hashPassword = derivedKey.toString("hex");
        if (hashPassword === user.password) {
          req.session.loggedin = true;
          req.session.userId = user.id;
          res.redirect("home");
          return;
        }
      }

      req.session.loginFailed = true;
      res.redirect("/login");
    } catch (error) {
      next(error);
    }
  }
);

router.get("/home", isUser, (req, res, next) => {
  res.render("home");
});

module.exports = router;
