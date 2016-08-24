var fs = require("fs");

module.exports = function(directory,extension,callback){
    fs.readdir(directory,function(err,files){
        if(!err){

            var rs = files.filter(
                filename => filename.slice( filename.length - extension.length - 1 ) === '.' + extension
            );
            // console.log(rs);
            callback(null,rs);
        }else{
            callback(err);
        }

    });
    
};