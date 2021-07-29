var express = require("express");
const mysql = require("mysql2");
var router = express.Router();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "training",
});

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
