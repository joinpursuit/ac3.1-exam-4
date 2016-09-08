var http = require ("http");
var fs = require ("fs");

var server = http.createServer(function(request, response) {
	var url = request.url;

	var numbers = []
	for (var i = 0; i < 140; i ++) { 
		numbers.push([i])
	}
	
	if (url === "/poem-" + [i]) {
		fs.readFile("/poem-" + [i] + ".txt", function(err, data) {
			response.write(data.toString());
			response.end();
	});
	} else if (url === "/") {
		fs.readFile("index.html", function(err, data) {
			response.write(data.toString());
			response.end();
	});
	} else if (url === "/page-2") {
		fs.readFile("page-2.html", function(err, data) {
			response.write(data.toString());
			response.end();
	});
	} else {
		response.write("404! Page Not Found :'(")
		response.end();
	};
});
server.listen(3000);