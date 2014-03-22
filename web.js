// web.js

var logfmt = require("logfmt");

var express = require("express");
var app = express();

var http = require('http');
var server = http.createServer(app);

	

// ---------------------------------------

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.sendfile('/usr/index.html', {root:__dirname});
});
/*app.get('/css', function(req, res) {
  res.sendfile('/usr/style.css', {root:__dirname});
});*/
app.get('/js', function(req, res) {
  res.sendfile('/usr/js.js', {root:__dirname});
});


// ---------------------------------------


