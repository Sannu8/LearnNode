//Exercise 4:
var fs = require("fs"); //importing fs module from Node core library as it it needed to perform a filesystem operation.

fs.readFile(process.argv[2], "utf8", function callback(err, data) {
  if (err) {
    console.log("There's an error");
  } //incase of errror notifying that there's an error. utf8 as second argument converts data from buffer to string.

  var array = data.split("\n");
  console.log(array.length - 1);
});
