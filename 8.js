var http = require("http");
var url = process.argv[2];
http.get(url,(response) => {
    var resData = "";
    response.on("data",function(data){
        resData +=data.toString();
    });
    response.on("end",function(){
        console.log(resData.length);
        console.log(resData);
    });
});
