var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  var url = req.url;

  function readFile(filename) {
    fs.readFile(filename, function (err, data){
      res.write(data);
      res.end();
    })
  }

  if(url === "/") readFile('index.html');
  else if (url === "/page-2" || url === "/page-3") readFile('page-2.html');
  
})


server.listen(4000, function() {
  console.log("Part 2 of Exam's server is running on port 4000");
})