const fs = require("fs");

var ext = ".txt";
fs.readdir("./files", (err, data) => {
  try {
    console.log("Succeessss");
    var filtredList = data.filter(function (file) {
      return file.indexOf(ext) !== -1;
    });

    console.log(filtredList);
  } catch (error) {
    console.log(err);
  }
});
