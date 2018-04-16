var fs = require("fs"); //importing fs module from Node core library as it it needed to perform a filesystem operation.

var buf = fs.readFileSync(process.argv[2]); //fs.readFileSync('file path')  method is a synchronous method returns a buffer object that contains complete contents of the file.

var str = buf.toString(); //converting buffer object to String

var array = str.split("\n"); //splitting a string into an array of substrings passing the delimiter '\n' as argument which means newline.

console.log(array.length - 1);
