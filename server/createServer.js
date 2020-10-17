const http = require("http");
const url = require("url");

const proxy = http.createServer();

proxy.on("request", (req, res) => {
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.headers["accept"]);

  // url.parse
  let { query, pathname } = url.parse(req.url, true);
  console.log(query.name);
  console.log(query.age);

  // res.writeHead
  res.writeHead(200, {
    "content-type": "text/html;charset=utf8",
  });

  // req.url
  if (pathname == "/index" || pathname == "/") {
    res.end("<h2>Welcome to homepage</h2>");
  } else if (pathname == "/list") {
    res.end("Welcome to listpage");
  } else {
    res.end("Page not found");
  }

  // req.method
  if (req.method == "POST") {
    res.end("post");
  } else if (req.method == "GET") {
    res.end("get");
  }
  // res.end('<h2>Hello user</h2>');
});

proxy.listen(3000);
console.log("Hello server");
