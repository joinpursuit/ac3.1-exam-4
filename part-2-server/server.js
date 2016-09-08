var http = require('http');
var fs = require('fs');

var server =
    http.createServer(function(request, response) {

        if (request.url === '/') {
            fs.readFile('index.html', function(err, data) {
                if (err) {
                    response.write('Error')
                    response.end();
                } else {
                    response.write(data.toString());
                    response.end();
                }
            })
        } else if (request.url === '/page-2') {
            fs.readFile('page-2.html', function(err, data) {
                if (err) {
                    response.write('Error')
                    response.end();
                } else {
                    response.write(data.toString());
                    response.end();
                }
            })
        } else if (request.url === '/page-3') {
            fs.readFile('page-2.html', function(err, data) {
                if (err) {
                    response.write('Error') // error message not displaying. Page continues to load
                    response.end();
                } else {
                    response.write(data.toString());
                    response.end();
                }
            })
        // } else {
        //     response.write('<h1>Error with the page</h1>')
        //     response.end();
        // }  /// wasn't able to create the error page

        } for (var j = 0; j < 140; j++) {
            if (request.url === '/poem-' + j) {
                fs.readFile('poem-' + j + '.txt', function(err, data) {
                    if (err) {
                        response.write(err.toString()) //cannot get the error message to show page continues to load
                        response.end();
                    } else {
                        response.write(data.toString());
                        response.end();
                    }
                })
            }
        } 
    })

server.listen(3000);

//tried doing it like this but it didn't work

//else if (request.url === '/poem-' + j) { //---1
//     for (var j = 0; j < 140; j++) {
//         fs.readFile('poem-' + j + '.txt', function(err, data) {
//             if (err) {
//                 response.write(err.toString()) //cannot get the error message to show page continues to load
//                 response.end();
//             } else {
//                 response.write(data.toString());
//                 response.end();
//             }
//         })
//     }
