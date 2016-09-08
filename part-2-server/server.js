//LISA

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    var url = request.url;
    console.log(url)
    if (url === '/') {
        fs.readFile('index.html', function(err, data) {
            response.write(data.toString())
            response.end()
        })
    } else if ((url === '/page-2') || (url === '/page-3')) {
        fs.readFile('page-2.html', function(err, data) {
            response.write(data.toString())
            response.end()
        })

    // // // //   //	I DONT KNOW T_T!!!!
    // } else if (url === '/poem-' + i) {
    //     for (var i = 0; i < poem.length; i++) {
    //         fs.readFile('poem-' + i + 'txt', function(err, data) {
    //             response.write(data.toString())
    //             response.end()
    //         })
    //     }

        // } else if (url === '/poem-0') {
        //     fs.readFile('poem-0.txt', function(err, data) {
        //         response.write(data.toString())
        //         response.end()
        //     })

    } else if (url === '/poem-') {
        fs.readdir(process.cwd(), function(err, files) {
            if (err) {
                console.log(err);
                return;
            }
            var files = files
            console.log(files)
            for (var i = 0; i < files.length; i++) {
                if (url === 'poem-' + i) {
                    fs.readFile(files[i], function(err, data) {
                        response.write(data.toString())
                        response.end()
                    })
                }
            }
            response.end()
        });


    } else {
        response.write('foh oh foh')
        response.end()
    }

})

server.listen(9000)


// Update your server.js file to do the following: If the request url starts with '/poem' (followed by a dash and a number, i.e. /poem-1), 

// you should read the appropriate file and respond with the word within it. In other words, if the request url is '/poem-10', your server should read your 'poem-10' file and response.write the word contained in that file. 

// If your request url is '/poem-67' your server should response with the word in your poem-67.txt file, etc.
