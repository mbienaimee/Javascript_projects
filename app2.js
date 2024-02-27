const http = require('http')
http.createServer(function(req,res){
    res.write('hello there gloria')
    res.end()
   
}).listen(2000);