var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response){
	var url = request.url
	request.on("data", function(data1){
		console.log(data1.toString());
	})
	if (url === "/") {
		fs.readFile("index.html", function(err, data){
			response.write(data.toString());
			response.end();
		})
	
	}else if (url === "/page2") {
		fs.readFile("page-2.html", function(err,data){
			response.write(data.toString());
			response.end();
		})
	}else if (url ==="/poem-"){
		fs.readFile("createPoemFiles.js", function(err,data){
			fs.readFile("poem-" + i + "txt", poem[i])
			response.write(data);
			response.end();
		
		})
	}
})


server.listen(3000)