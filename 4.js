"user strict"

var fs = require("fs"),
    filename = process.argv[2];

fs.readFile(filename,function(err,data){
    var newLine = 0;
    if(!err){
        newLine = data.toString().split('\n').length;
        
    }
    console.log(newLine-1);
});