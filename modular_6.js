//Exercise 6

var fs = require("fs");
var path = require("path");

module.exports = function filter(dir, ext, callback) {
  var extension = "." + ext;

  fs.readdir(dir, (err, list) => {
    //fs.readdir reads the files in a directory.
    if (err) {
      return callback(err);
    }

    list = list.filter(file => path.extname(file) === extension);

    callback(null, list);
  });
};
