//Exercise 5:
var fs = require("fs");
var path = require("path");
var dir = process.argv[2];
var ext = process.argv[3];
var array = [];

fs.readdir(dir, function callback(err, list) {
  if (err) {
    console.log("There's an error");
  }

  for (var i = 0; i < list.length; i++) {
    array = path.extname(list[i]);
    console.log(array);
  }
});
