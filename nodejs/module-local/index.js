const data = require("./data.json");
const http = require("node:http");

console.info(data);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello, world!");
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});

// // require("./batman.js");
// require("./superman.js");
// const superHero = require("./super-hero.js");
// // superHero.getName();
// // superHero.setName("Balmond");
// // superHero.getName();

// // const newSuperHero = require("./super-hero.js");
// // console.info(newSuperHero.getName());

// const Balmond = new superHero("Balmond");

// Balmond.getName();
// Balmond.setName("Balmond");
// Balmond.getName();

// const Superman = new superHero("Superman");

// console.info(Superman.getName());

// const math = require("./math.js");

// console.info(math.add(3, 5));
// console.info(math.subtract(3, 5));

// // console.info("Hello node js");

// // const sum = add(9, 90);

// // console.info(sum);
