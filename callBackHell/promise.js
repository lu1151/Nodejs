const { promises } = require("dns");
const fs = require("fs");

// let promise = new Promise((resolve, reject) => {
//   fs.readFile("./11.txt", "utf8", (err, res) => {
//     if (err != null) {
//       reject(err);
//     } else {
//       resolve(res);
//     }
//   });
// });

// promise.then((res) => {
//   console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })

function p1() {
  return new Promise((resolve, reject) => {
    fs.readFile("./1.txt", "utf8", (err, res) => {
      resolve(res);
    });
  });
}

function p2() {
  return new Promise((resolve, reject) => {
    fs.readFile("./2.txt", "utf8", (err, res) => {
      resolve(res);
    });
  });
}

function p3() {
  return new Promise((resolve, reject) => {
    fs.readFile("./3.txt", "utf8", (err, res) => {
      resolve(res);
    });
  });
}

p1()
  .then((r1) => {
    console.log(r1);
    return p2();
  })
  .then((r2) => {
    console.log(r2);
    return p3();
  })
  .then((r3) => console.log(r3));
