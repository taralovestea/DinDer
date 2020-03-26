var express = require("express");
var db = require("../models");
var router = express.Router();


// variable for post requests. Just making the post not be 100 lines long
var userPostData = {
  user: req.body.user
}
var matchesPostData = {
  user1: req.body.user1,
  likedUser: req.body.likedUser
}

// if you need to add a table, just add another case, and switch the db.___.findAll to the name of your table.
router.get("/api/:table", function (req, res) {
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
router.get("/api/one/:table", function (req, res) {
  switch (req.params.table) {
    case "matches":
      db.Matches.findOne().then(function (dbMatches) {
        res.send(dbMatches);
      });
      break;
    case "user":
      db.User.findOne().then(function (dbUser) {
        res.send(dbUser);
      });
      break;
  }
});


router.post("/api/:table", function (req, res) {
  switch (req.params.table) {
    case "user":
      db.User.create(userPostData).then(function (dbUser) {
        res.json(dbUser);
      });
      break;
    case "matches":
      db.Match.create(matchesPostData).then(function (dbMatches) {
        res.json(dbMatches);
      });
      break;

    default:
      break;
  }
  
});