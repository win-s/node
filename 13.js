var http = require("http");
var url = require("url");
var moment = require("moment");
var port = process.argv[2];
// console.log(port);
http
    .createServer( (req,res)=>{
        var urlObj = url.parse( req.url,true );
        // console.log("url:"+urlObj);
        if(req.method !== "GET"){
            return res.end("Support Only GET\n");
        }

        var date = moment( urlObj.query.iso,"YYYY-MM-DDTHH:mm:ss.SSSZ");

        res.writeHead(200,{
            'Content-Type':'application/json'
        });
        // console.log("url pathname:"+urlObj.pathname);
        // console.log("iso:"+urlObj.query.iso);
        switch(urlObj.pathname){
            case "/api/unixtime": computeUnixTime();break;
            case "/api/parsetime": parseTime();break;
        }
        function parseTime(){
            // console.log("parseTime");
            var rs = JSON.stringify({
                "hour": date.hour(),
                "minute":date.minute(),
                "second":date.second()
            });
            res.write(rs);
            res.end();
        }
        function computeUnixTime(){
            // console.log("computeUnixTime");
            var rs = JSON.stringify({
                "unixtime":Number(date.format("x"))
            });
            res.end(rs);
        }
    })
    .listen(port);
