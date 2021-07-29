function isGuest(req, res, next) {
  if (!req.session.loggedin) {
    next();
  } else {
    res.redirect("home");
  }
}

function isUser(req, res, next) {
  if (req.session.loggedin) {
    next();
  } else {
    res.redirect("login");
  }
}

module.exports = {
  isGuest,
  isUser,
};
