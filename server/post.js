const http = require("http");
const url = require("url");
const querystring = require("querystring");

const proxy = http.createServer();

proxy.on("request", (req, res) => {
  let postParams = "";
  req.on("data", (params) => {
    postParams += params;
  });
  req.on("end", () => {
    console.log(querystring.parse(postParams));
  });
  res.end("Done");
});

proxy.listen(3000);
console.log("Hello server");
