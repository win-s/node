"user strict";

var fs = require('fs'),
    count = 0,
    filename = process.argv[2],
    fileContent = fs.readFileSync(filename),
    newLineASCII = '\n'.charCodeAt(0);

for(var i=0;i<fileContent.length;i++){
    
    if( fileContent[i]===newLineASCII){        
        count++;
        // console.log(newLineASCII+":"+fileContent[i]);
    }
}
console.log(count);
