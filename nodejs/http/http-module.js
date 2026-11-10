const http = require("node:http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  const username = {
    firstName: "Muhamad",
    lastName: "Rayhan",
  };

  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(username));
});

server.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
