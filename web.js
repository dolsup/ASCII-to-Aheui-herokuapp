var express = require("express");
var logfmt = require("logfmt");
var app = express();
var cnt = 0;
app.use(logfmt.requestLogger());


app.get('/', function(req, res) {
  res.sendfile('/usr/index.html', {root:__dirname});
  console.log(++cnt);
});
app.get('/js.js', function(req, res) {
  res.sendfile('/usr/js.js', {root:__dirname});
});
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

