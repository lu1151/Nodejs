const http = require("http");
const url = require("url");

const proxy = http.createServer();

proxy.on("request", (req, res) => {
  const method = req.method.toLowerCase();
  const pathname = url.parse(req.url).pathname;
  if (method == "get") {
    if (pathname == "/" || pathname == "/index") {
      res.end("Welcome to the homepage");
    } else if (pathname == "/list") {
      res.end("Welcome to the listpage");
    } else {
      res.end("Page not found");
    }
  } else if (method == "post") {
  }
});

proxy.listen(3000);

console.log("Hello world");
