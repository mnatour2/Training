var express = require("express");
const mysql = require("mysql2");
var router = express.Router();
const { isUser } = require("./middlewares");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "training",
});

router.get("/users", isUser, async function (req, res, next) {
  try {
    const [results] = await connection.promise().query("SELECT * FROM users");
    res.render("users", { users: results });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
