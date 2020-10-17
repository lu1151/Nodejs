const { promises } = require("dns");
const fs = require("fs");

// async function fn() {
//   throw "error";
//   return 123;
// }

// fn()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// await
const promisify = require("util").promisify;
const readFile = promisify(fs.readFile);

async function run() {
  let r1 = await readFile("./1.txt", "utf8");
  let r2 = await readFile("./2.txt", "utf8");
  let r3 = await readFile("./3.txt", "utf8");
  console.log(r1);
  console.log(r2);
  console.log(r3);
}

run();
