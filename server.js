var http = require('http');
var fs = require('fs');

var string = "<h1>Welcome to the home page</h1>"
fs.writeFile("index.html",string, function(err, success){
  fs.readFile("index.html", function(err, success){
    console.log(success.toString());
   
    })
  })
var string2 = "<h1>Welcome to page 2...or page 3?</h1>"
fs.writeFile("page-2.html",string2, function(err, success){
  fs.readFile("page-2.html", function(err, success){
    console.log(success.toString());
   
    })
  })
var server =
http.createServer(function(request,response){
  var url =request.url
  if(url === "/"){
  fs.readFile("index.html", function(err,data){
    response.write(data.toString());
    response.end()
  })
}else if(url === "/page-2"){
  fs.readFile("page-2.html",function(err,data){
    response.write(data.toString());
    response.end()
  })

}
for(var i = 0; i < 140 ; i++){
	else if(url === "/poem"+[i]){
	fs.readFile("poem-"+(i+1)+".txt",function(err,data){
    response.write(data.toString());
    response.end()
  })
		}
	}
});
server.listen(3500);