var http = require('http');
var fs = require('fs');


var server = http.createServer(function(request, response){
	var url = request.url;
	if(url === "/"){
			fs.readFile('index.html', function(err, data){
				response.write(data.toString())
				response.end()
		})
	} else if (url === '/page-2.html' || url === '/page-3.html'){
		fs.readFile('page-2.html', function(err, data){
			response.write(data.toString())
			response.end()
		})
	} 

	for(var i = 0; i < 140; i ++){
	var poemURL = "/poem-" + i + ".txt"
	if( url === poemURL){
		fs.readFile('poem-' + i + ".txt", function(err, data){
			response.write(data.toString());
			response.end()
		})
	}
	
	}
})
server.listen(3000)