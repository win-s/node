var filter = require("./filter.js");
filter(
    process.argv[2],
    process.argv[3],
    (err,files) => err?console.log(err) : files.forEach( file => console.log(file) )
);
