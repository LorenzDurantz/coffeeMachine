var PORT = 3000;

var express = require('express');

var app = express();

app.use(express.logger());
app.use(express.compress());

app.use(express.static(__dirname + '/static'));

var port = process.env.PORT || PORT;
app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});

// var http = require("http");

// http.createServer(function(req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.end("H\nello classmatesssss!");
// }).listen(8080);