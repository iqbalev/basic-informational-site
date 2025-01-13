const http = require("http");
const fs = require("fs");
const PORT = 8080;

function serveFile(filePath, res, statusCode) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>Page not found. :(</h1>");
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
    }
    res.end();
  });
}

const server = http.createServer((req, res) => {
  let filePath;

  switch (req.url) {
    case "/":
      filePath = "pages/index.html";
      break;
    case "/about":
      filePath = "pages/about.html";
      break;
    case "/contact":
      filePath = "pages/contact.html";
      break;
    default:
      filePath = "pages/404.html";
      break;
  }
  serveFile(filePath, res, filePath === "pages/404.html" ? 404 : 200);
});

server.listen(PORT, (err) => {
  if (err) {
    console.log("Something went wrong...");
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
