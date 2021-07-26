var express = require("express");
const mysql = require("mysql2");
var router = express.Router();
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "training",
});

router.get("/register", function (req, res, next) {
  res.render("register");
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.post("/register", function (req, res, next) {
  try {
    const { username, password, confirmPassword, email, mobile } = req.body;
    connection.execute(`INSERT INTO users (username, password, email, mobile)
    VALUES ('${username}', '${password}', '${email}', '${mobile}')`);
    res.render("index", {
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

router.post("/login", function (req, res, next) {
  // res.locals.username = req.body.username;
  res.render("index", {
    username: req.body.username,
    password: req.body.password,
  });
});

module.exports = router;
