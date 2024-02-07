const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  if (
    req.body.id === User.userInfo().id &&
    req.body.pw === User.userInfo().pw
  ) {
    res.send({ userInformation: req.body, success: true });
  } else {
    res.send({ userInformation: req.body, success: false });
  }
};
