const User = require("../models/user");
module.exports = {
  signup: function (req, res) {
    // taking a user
    const newuser = new User(req.body);

    if (newuser.password != newuser.password2)
      return res.status(401).json({ message: "password not match" });

    User.findOne({ email: newuser.email }, function (err, user) {
      if (user)
        return res.status(409).json({ auth: false, message: "email exits" });

      newuser.save((err, doc) => {
        if (err) {
          console.log(err);
          return res.status(400).json({ success: false });
        }
        res.status(201).json({
          succes: true,
          user: {
            id: doc._id,
            email: doc.email,
            firstname: doc.firstname,
            lastname: doc.lastname,
          },
        });
      });
    });
  },
  login: function (req, res) {
    let token = req.cookies.auth;
    User.findByToken(token, (err, user) => {
      if (err) return res(err);
      if (user)
        return res.status(406).json({
          error: true,
          message: "You are already logged in",
        });
      else {
        User.findOne({ email: req.body.email }, function (err, user) {
          if (!user)
            return res.status(401).json({
              isAuth: false,
              message: "Invalid Credentials",
            });

          user.comparepassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
              return res.status(401).json({
                isAuth: false,
                message: " Invalid Credentials",
              });

            user.generateToken((err, user) => {
              if (err) return res.status(400).send(err);
              res.cookie("auth", user.token).json({
                isAuth: true,
                user: {
                  id: user._id,
                  email: user.email,
                  firstname: user.firstname,
                  lastname: user.lastname,
                },
              });
            });
          });
        });
      }
    });
  },
  logout: function (req, res) {
    req.user.deleteToken(req.token, (err, user) => {
      if (err) return res.status(400).send(err);
      res.sendStatus(200);
    });
  },
  profile: function (req, res) {
    res.json({
      isAuth: true,
      id: req.user._id,
      email: req.user.email,
      name: req.user.firstname + req.user.lastname,
    });
  },
};
