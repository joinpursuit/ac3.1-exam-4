var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
    if (req.url.match(/\/poem-/)) {
        var target = req.url.split("");
        target.shift();
        target = target.join("");
        target = target + ".txt"
        fs.readFile(target, function(err, data) {
            res.write(data.toString());
            res.end();
        })
    }

    switch (req.url) {
        case "/":
            fs.readFile("index.html", function(err, data) {
                res.write(data.toString());
                res.end();
            })
            break;
        case "/page-2":
            fs.readFile("page-2.html", function(err, data) {
                res.write(data.toString());
                res.end();
            })
            break;
        case "/page-3":
            fs.readFile("page-2.html", function(err, data) {
                res.write(data.toString());
                res.end();
            })
            break;
        default:
            fs.readFile("index.html", function(err, data) {
                res.write(data.toString());
                res.end();
            })
    }
})

server.listen(3000);
