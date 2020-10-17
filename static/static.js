const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const mime = require("mime");

const proxy = http.createServer();

proxy.on("request", (req, res) => {
  let pathname = url.parse(req.url).pathname;
  pathname = pathname == "/" ? "/default.html" : pathname;

  let realPath = path.join(__dirname, "public" + pathname);

  let type = mime.getType(realPath);

  fs.readFile(realPath, (err, result) => {
    if (err != null) {
      console.log(err);
      return;
    }

    res.writeHead(200, {
      "content-type": type,
    });

    res.end(result);
  });
});

proxy.listen(3000);
console.log("Hello world");
