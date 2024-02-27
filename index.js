var http = require('http')
http.createServer(function(req,res) {
    res.writeHead(200,{'context-Type':'text/html'})
    res.write('hello dear')
    res.end()
}).listen(8080)