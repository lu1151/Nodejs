const template = require("art-template");
const path = require("path");
const dataFormat = require("dateformat");

// use absolute path in template root
template.defaults.root = path.join(__dirname, "views");

// import variable
template.defaults.imports.dateFormat = dataFormat;

// extname
template.defaults.extname = ".art";

// output
const output = template("output", {
  name: "Evan",
  content: "<h1>This is title</h1>",
});
console.log(output);

// inheritance
const inheritance = template("inheritance", {
  msg: "This is a message",
});
console.log(inheritance);

// condition
const condition = template("condition", {
  age: 20,
});
console.log(condition);

// loop
const loop = template("loop", {
  users: [
    { name: "Tom", age: 18 },
    { name: "Alex", age: 28 },
    { name: "Jason", age: 38 },
  ],
});
console.log(loop);

// import variable
const date = template("importVariable", {
  time: new Date(),
});
console.log(date);

// sub template
const subTemplate = template("subTemplate", {
  msg: "This is a message",
});
console.log(subTemplate);
