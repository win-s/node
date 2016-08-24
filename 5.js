"user strict";

var fs = require("fs"),
    dirName = process.argv[2],
    extension = process.argv[3];
fs.readdir(dirName,(err,files)=>{

    files.forEach( filename =>
        filename.slice( filename.length - extension.length, filename.length) === extension 
            && filename.charAt(filename.length - extension.length - 1) === "."
            && console.log(filename)
    );
});
