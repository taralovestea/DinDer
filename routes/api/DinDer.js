var express = require("express");
var db = require("../../models");
var passport = require("../../configs/passport");
var router = express.Router();

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/api/login", passport.authenticate("local"), function (req, res) {
  console.log("got to login")
  res.json(req.user);
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/api/signup", function (req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(function (req) {
      res.redirect(307, "/api/login");
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// Route for logging user out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
router.get("/api/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      id: req.user.id,
      email: req.user.email,
      userName: req.user.userName,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      userBio: req.user.userBio,
      profilePic: req.user.profilePic,
    });
  }
});
// if you need to add a table, just add another case, and switch the db.___.findAll to the name of your table.
router.get("/:table", function (req, res) {
  switch (req.params.table) {
    case "matches":
      db.Matches.findAll().then(function (dbMatches) {
        res.send(dbMatches);
      });
      break;
    case "user":
      db.User.findAll().then(function (dbUser) {
        res.send(dbUser);
      });
      break;
  }
});

// find one
// router.get("/one/:table", function (req, res) {
//   switch (req.params.table) {
//     case "matches":
//       db.Matches.findOne().then(function (dbMatches) {
//         res.send(dbMatches);
//       });
//       break;
//     case "user":
//       db.User.findOne().then(function (dbUser) {
//         res.send(dbUser);
//       });
//       break;
//   }
// });

router.get("/api/user/:id", function (req, res) {

  db.User.findOne({ where: { id: req.params.id } }).then(function (dbUser) {
    console.log(dbUser)
    res.send(dbUser)
  })
});

router.post("/:table", function (req, res) {
  switch (req.params.table) {
    case "user":
      db.User.create({
        user: req.body.user
      }).then(function (dbUser) {
        res.json(dbUser);
      });
      break;
    case "matches":
      db.Match.create({
        user1: req.body.user1,
        likedUser: req.body.likedUser
      }).then(function (dbMatches) {
        res.json(dbMatches);
      });
      break;

    default:
      break;
  }

});

module.exports = router;
