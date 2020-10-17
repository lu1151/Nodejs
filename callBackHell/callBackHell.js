const fs = require("fs");

fs.readFile("./1.txt", "utf8", (err, res1) => {
  console.log(res1);
  fs.readFile("./2.txt", "utf8", (err, res2) => {
    console.log(res2);
    fs.readFile("./3.txt", "utf8", (err, res3) => {
      console.log(res3);
    });
  });
});
