// // exports
// const add = (n1, n2) => n1 + n2;
// exports.add = add;

// // module.exports
// const greeting = (name) => `Hello ${name}`;
// module.exports.greeting = greeting;

// module.exports != exports, only module.exports will be exported
const x = 100;
exports.x = x;
module.exports = {
  name: "Adam",
};