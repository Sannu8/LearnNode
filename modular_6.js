var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function callback(err, list) {
    //fs.readdir reads the files in a directory.
    if (err) {
      console.log("There's an error");
    }
  
    for (var i = 0; i < list.length; i++) {
      var array = path.extname(list[i]); //here, path.extname method gets the extension name of the file starting from '.'
  
      if (array === ext) {
        console.log(list[i]);
      }
    }
  });

  data = is filtered list of files

module.exports = function(dir, ext,(err,data)=>{if (err) {
    console.log("There's an error");
  }}) {};
