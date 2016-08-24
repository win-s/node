var fs = require("fs");
var http = require("http");
var port = process.argv[2];
var src = process.argv[3];

http
    .createServer( (req,res)=>{
        res.writeHead(200,{'content-type':'text/plain'});
        fs.createReadStream(src).pipe(res);
    })
    .listen(port);
