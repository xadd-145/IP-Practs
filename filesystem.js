//FILESYSTEM NODE

//WRITE a file
var fs = require("fs");
fs.writeFile('hello.txt', 'Hello Friends, this is file system', function(err) {
if (err) {
	return console.error(err);
}
console.log("Data written successfully!");
});


//APPEND a file
var fs = require('fs');
var data = "\nWelcome:)";
fs.appendFile('hello.txt', data, 'utf8', function(err) {
    if (err) throw err;
    console.log("Data is appended to file successfully.")
});


//READ a file
//1.Async
var fs = require("fs");
fs.readFile('hello.txt', function (err, data) {
if (err) {
	return console.error(err);
}
console.log("Read: " + data.toString());
});
//2.Sync
var fs = require("fs");

// Synchronous read
var data = fs.readFileSync('hello.txt');
console.log("Read: " + data.toString());


//OPEN a file
var fs = require("fs");
console.log("opening file!");
fs.open('hello.txt', 'r+', function(err, fd) {
    if (err) {
	    return console.error(err);
    }
    console.log("File open successfully");	
});

//CLOSE a file
fs.close(fd, function(err) {
    if (err) {
        console.log(err);
    }
    console.log("File closed successfully.");
}


//DELETE a File
var fs = require("fs");
console.log("deleting an existing file");
fs.unlink('hello.txt', function(err) {
    if (err) {
	    return console.error(err);
    }
    console.log("File deleted successfully!");
});

//OPEN & READ
var fs = require("fs");
var buf = new Buffer(1024);

console.log("opening an existing file");
fs.open('hello.txt', 'r+', function(err, fd) {
if (err) {
	return console.error(err);
}
console.log("File opened successfully!");
console.log("reading the file");
	
fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
	if (err){
		console.log(err);
	}
	console.log(bytes + " bytes read");
	
	// Print only read bytes to avoid junk.
	if(bytes > 0){
		console.log(buf.slice(0, bytes).toString());
	}
});
});

//RUN NODE FILESYSTEM.JS
