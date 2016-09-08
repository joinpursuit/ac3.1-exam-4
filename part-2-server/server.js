var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res){
	var url = req.url;
	if(url==='/'){
		fs.readFile('index.html',function(err, data){
			if(err) throw err;
			else{
				res.write(data.toString());
				res.end();
			}
		})
		
	}
	else if(url==='/page-2'){
		fs.readFile('page-2.html',function(err, data){
			if(err) throw err;
			else{
				res.write(data.toString());
				res.end();
		}
	})
	}
	else {
		for(var i=0;i< 140; i++){
			if(url==='/poem-'+i){
				fs.readFile('poem-'+i+'.txt',function(err, data){
				if(err) throw err;
				else{
					res.write(data.toString());
					res.end();
		}
	})
			}
		}
	}
	
})

server.listen(3000);