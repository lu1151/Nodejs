const fs = require("fs");
const path = require("path");

// absolute path is better
fs.readFile(path.join(__dirname, "exports.js"), "utf8", (err, doc) => {
  if (err != null) {
    console.log(err);
    return;
  }
  console.log(doc);
});
