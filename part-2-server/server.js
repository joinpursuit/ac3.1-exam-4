var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
	var url = request.url;

	if(url === '/'){
		fs.readFile('index.html', function(error,data){
			if (error) throw error;
			console.log(data.toString());
		fs.writeFile('index.html', 'Hey There!')
		})

	} else if (url === '/page-2'){
		fs.readFile('page-2.html', function(error,data){
			if(error) throw error;
			console.log(data.toString());
		fs.writeFile('page-2.html', 'How are you?')
		})
	}

})
server.listen(3000);