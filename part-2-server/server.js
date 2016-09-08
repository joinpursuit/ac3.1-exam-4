var htp = require('http')
var fs = require('fs')
var server = htp.createServer(function(req, resp){
    var url = req.url
    if(url === '/'){
    	fs.readFile('index.html',function(err,data){
    		if(err) throw err
    			else{
    				resp.write(data.toString())
    				resp.end()
    			}
    	})
    }
	else if(url === '/page-2' || url === '/page-3'){
		fs.readFile('page-2.html', function(err,data){
			if(err) throw err
				else{
					resp.write(data.toString())
				}
		})
	}
	// else if( url === '/poem'){
	// 	for (var i = 0 ; i < 139 ; i ++){

	// })

	else{
		resp.write('<h1> 404 No such file found</h1>')
		resp.end()
	}
})
server.listen(4000)