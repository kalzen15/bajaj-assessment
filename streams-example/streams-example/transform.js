const { Transform } = require("stream");
const { createReadStream, createWriteStream } = require("fs");

const transformStream = new Transform();
const readStream = createReadStream("./README.md");
const writeStream = createWriteStream("./copy.txt");

transformStream._transform = (chunk, encoding, callback) => {
  transformStream.push(chunk.toString().toUpperCase());
  callback();
};

readStream.pipe(transformStream).pipe(writeStream);
