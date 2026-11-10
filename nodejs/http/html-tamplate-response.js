const http = require("node:http");
const fs = require("node:fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const username = {
    firstName: "Muhamad",
    lastName: "Rayhan",
  };
  let html = fs.readFileSync("./index.html", "utf-8");
  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.end(html);

  html = html.replace("{{name}}", "Rayhan");

  // fs.createReadStream("./index.html").pipe(res);
  // fs.createReadStream(__dirname + "/index.html").pipe(res);
  res.end(html);
});

server.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
