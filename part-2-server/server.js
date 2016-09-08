var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response){
  var url = request.url;

  if(url === "/"){
      fs.readFile('index.html', function(err, data){
        if(err) throw err;
        // else{
        response.write(data.toString())
            response.end()
      // }
      })    
  }

  else if(url === "/page-2"){
      fs.readFile('page-2.html', function(err, data){
        response.write(data.toString())
        response.end()
      })
  }
  else if(url === "/page-3"){
      fs.readFile('page-2.html', function(err, data){
        response.write(data.toString())
        response.end()

      })
  }
  response.write("yes")
  response.end('this works')
})

server.listen(5050);