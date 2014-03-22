// web.js

var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

// ---------------------------------------


app.get('/', function(req, res) {
  res.sendfile('/usr/index.html', {root:__dirname});
});
/*app.get('/css', function(req, res) {
  res.sendfile('/usr/style.css', {root:__dirname});
});
app.get('/js', function(req, res) {
  res.sendfile('/usr/js.js', {root:__dirname});
});*/
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

// ---------------------------------------


