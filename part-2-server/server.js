var http = require ("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
	var url = req.url;
	if (url === "/") {
		fs.readFile("index.html", function (err, data) {
			if (err) throw err;
			res.write(data.toString());
			res.end();
		});
	} else if (url === "/page-2" || url === "/page-3") {
		fs.readFile("page-2.html", function (err, data) {
			if (err) throw err;
			res.write(data.toString());
			res.end();
		});
	} else {
		// res.write("<h1>404</h1>");
		// res.write("<h3>Page Not Found</h3>");
		// res.end();
		for (var i = 0; i < 140; i++) {
			if (url === "/poem-" + i) {
				fs.readdir("./", function (err, files) {
					if (err) throw err;
					if (files === "poem-" + i + ".txt") {
					res.write(files.toString());
					res.end();
					}
				});
				res.end()
				break
			} 
		}
	} 
})

server.listen(4500)