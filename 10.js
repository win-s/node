var moment = require("moment");
var net = require("net");
var port = process.argv[2];


net.createServer( socket=>{
    socket.write( moment().format("YYYY-MM-DD HH:mm\n") );
    socket.end();
} ).listen(port);
