var http = require('http');
var fs= require('fs');

var server = http.createServer(function(request, response){

	
		if(request.url === '/'){
			fs.readFile('index.html', function(err,data){
				if(err){
				console.log(err)
			} else {
				response.write(data.toString())
				response.end()
				}
			})
		} else if (request.url === '/page-2'){
				fs.readFile('page-2.html', function(err,data){
				if(err){
				console.log(err)
			} else {
				response.write(data.toString())
				response.end()
				}
			})
		} else if(request.url === '/page-3'){
				fs.readFile('page-3.html', function(err,data){
				if(err){
				console.log(err)
			} else {
				response.write(data.toString())
				response.end()
				}
			})//creat a loop
		} else if (request.url === '/poem'+ i){
				fs.readFile('page-'+i+'.txt', function(err,data){
				if(err){
				console.log(err)
			} else {
				response.write(data.toString())
				response.end()
				}
			})

		} else {
			response.write("<h1>404 Page not found</h2>")
			response.end()
		}
	
})		
server.listen(3000)