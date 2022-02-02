const {Writable} = require("stream");

const charchecks = new Writable({

write(chunk, encoding, callback){

	const string = chunk.toString();
	
	if(string.includes("\/")){
	callback(Error("Forbidden character"));
	
	}
	else
	{
	console.log(string);
	callback();
	}
}
});

process.stdin.pipe(charchecks).on('error', console.log);


console.log("Enter the string: ");

//Syntax: writable._write( chunk, encoding, callback )