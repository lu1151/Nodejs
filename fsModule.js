const fs = require("fs");

// // readFile
// fs.readFile("./exports.js", "utf8", (err, doc) => {
//   console.log(err);
//   console.log(doc);
// });

// writeFile
const con = "<h3>NodeJs writeFile</h3>";
fs.writeFile("./writeFile.html", con, (err) => {
  if (err != null) {
    console.log(err);
    return;
  }
  console.log("Done!");
});
