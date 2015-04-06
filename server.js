var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 8000

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(__dirname + '/data.txt');
    stream.pipe(res);
});
server.listen(port);