var map = require('through2-map');
var http = require('http');
var port = process.argv[2];

http.createServer( (req,res)=>{
    if(req.method === 'POST'){
        req
            .pipe( map( chunk=> chunk.toString().toUpperCase() ))
            .pipe( res );
    }
} ).listen(port);
