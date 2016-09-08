var http = require("http")
var fs = require("fs")

var server = http.createServer(function(request, response) {
	var url = request.url
	// console.log(url)

	switch(url) {
		case "/" :
			fs.readFile("./index.html", function(err, data) {
				if (err) throw err;
				response.write(data.toString());
				response.end();
			})
			break;

		case "/index-2" :
			fs.readFile("index-2.html", function(err, data) {
				if (err) throw err
					// console.log(data)
				response.write(data.toString())
				response.end()
			})
			break;

		case "/poem-" :
			var fileNumber = ''
			url.forEach(function(char) {
				if(typeof char === typeof number) {
					fileNumber += char
				}
			})
			fs.readFile("poem-" + fileNumber + ".txt", function(err, data) {
				if(err) throw err
				response.write(data.toString())
				response.end()
			})


	}
	response.end()



})
server.listen(9000)