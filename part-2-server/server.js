var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
	var url = request.url
	var poemFile = url.substring(1)+'.txt'
	console.log(poemFile)

	if (url == '/') {
		fs.readFile('index.html', function(err,data){
			if (err) {
				console.log(err)
			} else {
				response.write(data.toString());
				response.end();
			}
		})
	} else if (url === '/index') {
		fs.readFile('index.html', function(err,data){
			if (err) {
				console.log(err)
			} else {
				response.write(data.toString());
				response.end();
			}
		})		
	} else if (url === '/page-2') {
		fs.readFile('page-2.html', function(err,data){
			if (err) {
				console.log(err)
			} else {
				response.write(data.toString());
				response.end();
			}
		})		
	} else if (url === '/page-3') {
		fs.readFile('page-2.html', function(err,data){
			if (err) {
				console.log(err)
			} else {
				response.write(data.toString());
				response.end();
			}
		})		
	} else if (url.indexOf('poem-') != -1) {
		fs.readFile(poemFile, function(err,data){
			if (err) {
				console.log(err)
			} else {
				response.write(data.toString());
				response.end();
			}
		})
	} else {
		response.write('<h1>404</h1><br><br><p>\'Nah Bruh, Ain\'t nothing here.</p>');
		response.end();
	}
})

server.listen(8888)