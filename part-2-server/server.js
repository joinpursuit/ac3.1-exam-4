var http = require('http');
var fs = require('fs');

var server = http.createServer ( function (request, response) {

	if (request.url === '/') {

		fs.readFile('index.html', function (error, data) {

			if (error) {
				console.log('ERROR!');
			} else {
				response.write(data);
				response.end();
			}
		})
	} else if (request.url === '/page-2.html') {

		fs.readFile('page-2.html', function (error, data) {

			if (error) {
				console.log('ERROR!');
			} else {
				response.write(data);
				response.end();
			}
		})
	} else if (request.url === '/page-3.html') {

		fs.readFile('page-2.html', function (error, data) {

			if (error) {
				console.log('ERROR!');
			} else {
				response.write(data);
				response.end();
			}
		})
	} else if (request.url === '/poem-[i].txt' [i] {

		fs.readFile('poem-[i].txt', function (error, data) {

			if (error) {
				console.log('ERROR!');
			} else {
				response.write(poem-[i]);
				response.end();
			}
		})
	} else {
		response.write('<h1>404 ERROR: Page Not Found!</h1>');
		response.end();
	}
})

server.listen(3000)