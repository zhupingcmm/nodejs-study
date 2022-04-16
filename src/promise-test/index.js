const path = require("path");
const fs = require("fs");

const fullFileName = path.resolve(__dirname, "file", "a.json");
console.log("fullFileName::", fullFileName);
fs.readFile(fullFileName, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data.toString());
});
