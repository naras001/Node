var http = require('http')

http.createServer(function(req, res){
    res.write('Hare Krishna');
    res.end();
}).listen(8080);