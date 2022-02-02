let fs = require('fs'),
 
reader = fs.createReadStream('input.txt');
  
reader.on('data', function (chunk) {
    console.log(chunk.toString());
});