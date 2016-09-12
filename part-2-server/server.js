var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	var url = request.url;

	if(url === '/'){
		fs.readFile('index.html', function(err, data){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(data);
			response.end();
		})	
	} else if(url === '/page-2' || url === '/page-3'){
		fs.readFile('page-2.html', function(err, data){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(data);
			response.end();
		})	
	} else if(url.search('/poem-') === 0 && parseInt(url.slice(6)) >= 0 && parseInt(url.slice(6)) < 140){
		fs.readFile('poem-' + parseInt(url.slice(6))+ '.txt', function(err, data){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(data);
			response.end();
		})
	}
})

server.listen(3000);