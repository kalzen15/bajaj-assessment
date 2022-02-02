const stream = require("stream");

const writable = new stream.Writable({
  write: function (chunk, encoding, next) {
    console.log(chunk.toString());
    next();
  },
});

writable.write("Stream Writable Example", "utf8", () => {
  console.log("Success");
});

//Sytax: writable.write( chunk, encoding, callback)
