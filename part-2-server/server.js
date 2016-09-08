// REQUIRE HTTP & FS
var http = require('http');
var fs = require('fs');

// CREATE THE SERVER
var server = http.createServer(function(request, response) {

// WRITE THE HEAD OF THE FUNCTION
response.writeHead(200, {'Content-Type':'text/html'});

// REQUEST THE URL
var url = request.url;

// WRITE THE IF/ ELSE STATEMENTS
if(url === '/' || url === 'index.html') {
	fs.readFile('index.html', function(err, data) {
		response.write(data.toString());
		response.end();
	})
}
 else if(url === '/page-2' || url === '/page-3') {
	fs.readFile('page-2.html', function(err, data) {
		response.write(data.toString());
		response.end();
	})
} 

// else if(request.url.includes('.')) {
// 	fs.readFile(request + '.txt', function(err, data) {
// 		response.write(data.toString());
// 		response.end();
// 	})
// } 

else {
	response.write('<h1>404, page not found!</h1>');
	response.end();
}


})// END SERVER

server.listen(3000)