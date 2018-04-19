//Exercise 6:

var mymodule = require("./modular_6");

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, (err, list) => {
  if (err) {
    console.log("There's an error");
  }

  list.forEach(file => {
    console.log(file);
  });
});
