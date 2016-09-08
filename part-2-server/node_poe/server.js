var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    var url = request.url;
    console.log('URL', url);
    if (url === '/') {
        fs.readFile('index.html', function(err, data) {
            if (err) console.log(err);
            else {
                response.write(data.toString());
                response.end();
            }
        })
    } else if (url === '/page-2') {
      fs.readFile('page-2.html', function(err, data) {
          if (err) console.log(err);
          else {
              response.write(data.toString());
              response.end();
          }
      })
    }
})
server.listen(8000);
