var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
	var url = req.url;
	console.log('url: ', url);

	if (url === "/") {
		fs.readFile("index.html", function (err, data) {
			if (err) throw err;
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end("index.html served");
		})
	} else if (url === "/page-2" || url === "/page-3") {
		fs.readFile("page-2.html", function (err, data) {
			if (err) throw err;
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end("page-2.html served");
		})
	} else if (url === "/main.css") {
		fs.readFile("main.css", function (err, data) {
			if (err) throw err;
			res.writeHead(200, { 'Content-Type': 'text/css' });
			res.write(data);
			res.end();
		})
	} 
	// else if (url === "./poem/poem-" + i) {
	// 	if (i )
	// 	fs.readFile("./poem/poem-" + i +".txt", function (err, data) {
	// 		if (err) throw err;
	// 		// res.writeHead(200, { 'Content-Type': 'text/text' });
	// 		res.write(data.toString());
	// 		res.end();
	// 	})
	// } 
	else {
		// res.write('404 Page Not Found.');
		res.end();
	}
})

server.listen(3000);