var express = require("express");
const mysql = require("mysql2");
const session = require("express-session");
var router = express.Router();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "training",
});

router.use(
  session({
    secret: "yeeee@yeeeeeeet",
    resave: true,
    saveUninitialized: true,
  })
);

/* GET users listing. */

router.get("/users", async function (req, res, next) {
  try {
    if (req.session.loggedin) {
      const [results] = await connection.promise().query("SELECT * FROM users");
      res.render("users", { users: results });
    } else {
      res.redirect("login");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
