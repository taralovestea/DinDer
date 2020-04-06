var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "project3"
})};

connection.connect(function(err) {
  if (err) {
    console.log("Error!");
  }
  console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
