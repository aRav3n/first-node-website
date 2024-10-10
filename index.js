const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    filename === "./" ? (filename = "./index.html") : (filename = filename);

    fs.readFile(filename, function (err, data) {
      if (err) {
        fs.readFile("./404.html", function (err, data) {
          if (err) throw err;
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(data);
        });
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      // removed res.write(data) and added (data) to res.end after peeking at code from https://github.com/Anin-Hasan
      res.end(data);
    });
  })
  .listen(8080);
