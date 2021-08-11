const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const actorsRouter = require("./routes/actors");
const moviesRouter = require("./routes/movies");
const knex = require("./knex/knex");

const app = express();

const store = new KnexSessionStore({
  knex,
});

app.use((/** @type {express.Request} */ req, res, next) => {
  req.db = knex;
  next();
});

app.use(
  session({
    store,
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
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/", actorsRouter);
app.use("/", moviesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
