var express = require("express");
const mysql = require("mysql2");
const { pbkdf2Sync } = require("crypto");
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

router.post("/register", async function (req, res, next) {
  try {
    const { username, password, confirmPassword, email, mobile } = req.body;
    const derivedKey = pbkdf2Sync(password, username, 10000, 32, "sha512");
    const hash_password = derivedKey.toString("hex");
    await connection.promise().execute(`INSERT INTO users (username, password, email, mobile)
        VALUES ('${username}', '${hash_password}', '${email}', '${mobile}')`);
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

router.post("/login", async function (req, res, next) {
  try {
    const { username, password } = req.body;

    const [rows] = await connection
      .promise()
      .query(
        `Select username,password from users WHERE username='${username}' limit 1`
      );

    if (rows.length > 0) {
      const user = rows[0];
      const derivedKey = pbkdf2Sync(password, username, 10000, 32, "sha512");
      hash_password = derivedKey.toString("hex");
      if (hash_password == user.password) {
        res.render("home");
      } else {
        throw new Error("Username or password is wrong.");
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
