var http = require('http');
var fs = require('fs');

var server = 
	http.createServer(function(req, res) {
		var url = req.url;
		// ### Step 1:
		if(url === '/') {
			fs.readFile('./index.html', function(err, data) {
				if(err) { throw err }
				res.write(data.toString());
				res.end();
			})
		}
		// ### Step 2:
		if (url === '/page-2' || url === '/page-3') {
			fs.readFile('./page-2.html', function(err, data) {
				if(err) { throw err }
				res.write(data.toString());
				res.end();
			})
		}
		// ### Step 4:
		for(var i = 0; i < 140; i++) {
			if(url === '/poem-' + i) {
				fs.readFile('./poem-' + i + '.txt', function(err, data) {
					if(err) { throw err }
					res.write(data.toString());
					res.end();
				})
			}
		}
	})

server.listen(3000);