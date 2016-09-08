var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  var url = req.url;

  function readFile(filename) {
    fs.readFile(filename, function (err, data){
      if(err){
        res.write('<h1>404</h1>');
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    })
  }

  var poemUrl = url.substring(0, 6)
  if(url === "/") readFile('index.html');
  else if (url === "/page-2" || url === "/page-3") readFile('page-2.html');
  else if(poemUrl === "/poem-") {
    var num = url.substring(6)
    readFile("poem/poem-" + num + '.txt')
  }
  
})


server.listen(4000, function() {
  console.log("Part 2 of Exam's server is running on port 4000");
})