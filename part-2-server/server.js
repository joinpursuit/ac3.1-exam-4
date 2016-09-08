// . If the request url is '/' the server should read the `index.html` file and write the contents as a response
// 2. If the request url is '/page-2' OR 'page-3' the server should read the `page-2.html` file and write the contents as a response
// 3. Copy and paste the poem found at the bottom of this page (that's saved in the `poem` variable) into your createPoemFiles.js file. Within that same file use the `fs` module to write a function that will create 140 new text (.txt) files, and insert a word from the  poem into each file. The files should be called `poem-0.txt`, `poem-1.txt`, `poem-2.txt`, etc., all the way up to `poem-139.txt`. **Make sure the files end in '.txt'.** Each file should contain one word from the poem, so for example, `poem-0.txt` should contain the first word from the poem, `poem-9.txt` should contain the tenth word, etc. When you are ready, run the `createPoemFiles.js` script.
// 4. Update your server.js file to do the following: If the request url starts with '/poem' (followed by a dash and a number, i.e. `/poem-1`), you should read the appropriate file and respond with the word within it. In other words, if the request url is '/poem-10', your server should read your 'poem-10' file and `response.write` the word contained in that file. If your request url is '/poem-67' your server should response with the word in your `poem-67.txt` file, etc.

// ***


var fs =require('fs')
var http = require('http')
var server = http.createServer(function(request,response){
var url = request.url

	switch(url){
		case '/':
		fs.readFile('index.html',function(err,data){
			response.write(data.toString())
			response.end()
		})
		break;

		case 'page2.html':
		fs.readFile('page2.html',function(err,data){
			if(err) throw err
			response.write(data.toString())
			response.end()
		})
		break;

		case 'page3.html':
		fs.readFile('page2.html',function(err,data){
			if(err) throw err
			response.write(data.toString())
			response.end()
		})
		break;
		
		case 'poem'

	}






})

server.listen(3000)