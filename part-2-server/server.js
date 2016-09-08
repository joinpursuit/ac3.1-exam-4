var http = require('http');
var fs = require('fs');
//var readfiles = require("./createPoemFiles.js")
//var i = request.url
//console.log(request.url)

var server = http.createServer(function(request, response){
	var url = request.url;
	if(url==='/'){
		fs.readFile('index.html', function(err,data){
			response.write(data.toString());
			response.end();
		})
	}
	else if(url === "/page-2" || url === "/page-3"){
		fs.readFile('page-2.html', function(err,data){
			response.write(data.toString());
			response.end();
		})
	}

	else if(url === "/poem-0"){
		fs.readFile("poem-0.txt", function(err,data){
			response.write(data.toString());
			response.end();
		})
	}
		else if(url === "/poem-1"){
		fs.readFile("poem-1.txt", function(err,data){
			response.write(data.toString());
			response.end();
		})
	}
		else if(url === "/poem-2"){
		fs.readFile("poem-2.txt", function(err,data){
			response.write(data.toString());
			response.end();
		})
	}
		else if(url === "/poem-3"){
		fs.readFile("poem-3.txt", function(err,data){
			response.write(data.toString());
			response.end();
		})
	}
		else if(url === "/poem-4"){
		fs.readFile("poem-4.txt", function(err,data){
			response.write(data.toString());
			response.end();
		})
	}
		else if(url === "/poem-5"){
		fs.readFile("poem-5.txt", function(err,data){
			response.write(data.toString());
			response.end();
		})
	}
		else if(url === "/poem-6"){
		fs.readFile("poem-6.txt", function(err,data){
			response.write(data.toString());
			response.end();
		})
	}
		else if(url === "/poem-7"){
		fs.readFile("poem-7.txt", function(err,data){
			response.write(data.toString());
			response.end();
		})
	}
		else if(url === "/poem-8"){
		fs.readFile("poem-8.txt", function(err,data){
			response.write(data.toString());
			response.end();
		})
	}
		else if(url === "/poem-9"){
		fs.readFile("poem-9.txt", function(err,data){
			response.write(data.toString());
			response.end();
		})
	}
		else if(url === "/poem-10"){
		fs.readFile("poem-10.txt", function(err,data){
			response.write(data.toString());
			response.end();
		})
	}
	// 	else if(url === url){
	// 	fs.readFile(url+".txt", function(err,data){
	// 		response.write(data.toString());
	// 		response.end();
	// 	})
	// }
	else{
		response.write('<h1>404 page not found</h1>')
		response.end();
	}
})

server.listen(3000, function(){
	console.log("Listening to port 3000")
})