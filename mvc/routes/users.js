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
router.get("/users", function (req, res, next) {
  connection.query("SELECT * FROM users", function (err, results, fields) {
    if (err) {
      return next(err);
    }
    res.render("users", { users: results });
  });
});

module.exports = router;
