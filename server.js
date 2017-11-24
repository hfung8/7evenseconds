var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../7evenseconds/views/landing.html"));
  });

app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../7evenseconds/views/index.html"));
  });
  
app.listen(process.env.PORT || PORT, function() {
  console.log("App listening on PORT " + PORT);
});

