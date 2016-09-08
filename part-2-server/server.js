
var http = require('http'); 
var fs = require('fs'); 

var server = http.createServer(function(request, response){

var url = request.url;


  //get url & create if/else  for differernt urls
  if (url === '/'){ 
    fs.readFile('index.html', function(err, data) {
            response.write(data.toString());
            response.end();
      });
  }


  else if(url === '/page-2' || url === '/page-3') {
    fs.readFile('page-2.html', function(err, data) {
            response.write(data.toString());
            response.end();
        });
  }




  else if(url === '/poem-') {

    for (var i = 1; i < 140; i++){

    
      fs.readFile('poem-' + i + '.txt', function(err, data) {
            response.write();
            response.end();
        });
   }
  } 

 

  else {
    response.write('<h1>404</h1><br><p>Page not found</p>');
        response.end();
  }

});
console.log('server is running!')

server.listen(3000);




