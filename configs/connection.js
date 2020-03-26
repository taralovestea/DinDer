var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "passport_demo"
});

connection.connect(function(err) {
  if (err) {
    console.log("Error!");
  }
  console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
