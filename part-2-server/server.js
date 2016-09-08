
function handleServer(req,res) {
	var url = req.url;
	console.log("Connected")

	if (url === "/") {
		fs.readFile("index.html",function(err, data) {
			if(err) {console.log("error: " + err)}
			else{
				res.write(data.toString())
				res.end()
			}	
		})
		
	}
	else if (url === "/page-2.html") {
		console.log(url.slice(0,6))

		fs.readFile("page-2.html",function(err, data) {
			if(err) {console.log("error: " + err)}
			else{
				res.write(data.toString())
				res.end()
			}	
		})
		
	}
	else if (url === "/page-3.html") {
		fs.readFile("page-3.html",function(err, data) {
			if(err) {console.log("error: " + err)}
			else{
				res.write(data.toString())
				res.end()
			}	
		})
		
	}

	else if (url.slice(0,6) === "/poem-") {
		fs.readFile(url.slice(1), function(err, data) {
			if(err) {
				console.log("error: " + err);
				 res.end("404");
			}
			else{
				res.write(data.toString())
				res.end()
			}	
		})
		
	}

	else{
		// res.write("404")
		res.end("404")
	}
}


















var http = require("http");
var fs = require("fs");
var server = http.createServer(handleServer)

server.listen("2000");

