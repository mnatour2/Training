var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const session = require("express-session");
const Knex = require("knex");
var app = express();

const knex = Knex({
  client: "mysql2",
  debug: true,
  log: {
    debug(message) {
      if (Array.isArray(message)) {
        for (const object of message) {
          console.log(
            "\u001B[36m",
            "\u001B[40m",
            object.sql,
            " \u001B[32m",
            object.bindings,
            "\u001B[0m"
          );
        }
      } else {
        console.log(
          "\u001B[36m",
          "\u001B[40m",
          message.sql,
          " \u001B[32m",
          message.bindings,
          "\u001B[0m"
        );
      }
    },
  },
  connection: {
    host: "localhost",
    user: "root",
    password: "admin",
    database: "training",
  },
});

app.use((req, res, next) => {
  req.db = knex;
  next();
});

app.use(
  session({
    secret: "yeeee@yeeeeeeet",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
