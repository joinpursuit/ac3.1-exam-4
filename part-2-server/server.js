var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response) {
        var url = request.url
        for (var i = 0; i <= 139; i++) {
            if (url === '/poem-' + i) {
                fs.readFile('poem-' + i + '.txt', function(err, data) {
                    if (err) {
                        throw err
                    } else {
                        response.write(data.toString())
                        response.end()
                    }
                })
            }
        }
        if (url === '/') {
            fs.readFile('index.html', function(err, data) {
                if (err) {
                    throw err
                } else {
                    response.write(data.toString())
                    response.end()
                }
            })
        } else if (url === '/page-2') {
            fs.readFile('page-2.html', function(err, data) {
                if (err) {
                    throw err
                } else {
                    response.write(data.toString())
                    response.end()
                }
            })
        } else if (url === '/page-3') {
            fs.readFile('page-2.html', function(err, data) {
                if (err) {
                    throw err
                } else {
                    response.write(data.toString())
                    response.end()
                }
            })
        } else if (url === '/createPoemFiles.js') {
            fs.readFile('createPoemFiles.js', function(err, data) {
                if (err) {
                    throw err
                } else {
                    response.write(data.toString())
                    response.end()
                }
            })
        } else if (url === '/server.js') {
            fs.readFile('server.js', function(err, data) {
                if (err) {
                    throw err
                } else {
                    response.write(data.toString())
                    response.end()
                }
            })
        } else { '404 bub' }
    }

)

//else 404 error not working as planned since two 'if' statements conflicting figure out how to loop within if-if else without issues

server.listen(3000)
