const { error } = require("node:console");
const fs = require("node:fs");

const fileContastan = fs.readFileSync("./file.txt", "utf-8");

console.info(fileContastan);

fs.readFile("./file.txt", "utf-8", (error, data) =>
  error ? console.info(error) : console.info(data),
);

fs.writeFileSync("./greet.txt", "Hello Viswash");

fs.writeFile("./greet.txt", " Hello Rayhan", { flag: "a" }, (error) =>
  error ? console.info(error) : console.info("file Writln"),
);
