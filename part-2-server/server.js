var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
var url = request.url
	
    		
	if(request.url === '/'){
     	fs.readFile('index.html', function(err, data) {
            response.write(data.toString());
            response.end();
        })

    } else if (request.url === '/page-2' || request.url === '/page-3') {
    	fs.readFile('page-2.html', function(err, data){
    		response.write(data.toString());
    		response.end();
    	})

    } else if (request.url === '/poem-' + i) {
    	for(var i = 0; i < 140; i++){
    		fs.readFile('poem-' + i + '.txt', function(err, data){
    		response.write(data.toString());
    		response.end();
    		}
    	)}
    }
    });

server.listen(3000);