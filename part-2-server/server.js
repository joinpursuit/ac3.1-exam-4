var http = require('http');
var fs = require('fs');


var server = http.createServer(function(request, response){
	if(request.url === "/"){
		request.url = request.url+"index.html";
	}//////////////////////////////////////////////////////////////////
	/////////// this is not needed but i added it due to the way the question
	/////////// was written as long as all of your a tags are writen with the
	/////////// same name as your file////////////////////////////////
	//////////////////////////////////////////////////////////////////
	else if(request.url === '/page-2'){
		request.url = request.url+".html";
	}else if(request.url === '/page-3'){
		request.url = request.url+ ".html";
	}//////////////////////////////////////////////////////////////////
	/////////// this is not needed but i added it due to the way the question
	/////////// was written as long as all of your a tags are writen with the
	/////////// same name as your file////////////////////////////////
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
	/////////// this adds the .txt to the end of any file if it does not  have a '.'' in it this will cover all my .txt file but if you are trying to get to a .html page other than index.html orpage-2 or page-3 it will not work because it will think you are trying to get to a .txt page.
	//////////////////////////////////////////////////////////////////
	else if (!(request.url.includes("."))){
		// console.log("hello")
		request.url = request.url + ".txt";
		// console.log(request.url);
	}
	//////////////////////////////////////////////////////////////////
	/////////// this reaads your file and then shows it as a response
	////////// if file cant be found it will show a 404 error
	//////////////////////////////////////////////////////////////////
	fs.readFile('.'+request.url, function(err, data){
		if (err){
			response.write("<h1>404</h1>");
			response.end();
		}else{
			response.write(data.toString());
			response.end();	
		};	
	})
});	
server.listen(3000);