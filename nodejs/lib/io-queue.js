const fs = require("node:fs");

// fs.readFile(__filename, () => {
//   console.info("this is readfile")
// })

// process.nextTick(() => console.info("This is nextic.1"))

// Promise.resolve().then(() => console.info("this is Promis.1"))

setTimeout(() => {
  console.info("this is timeout.1");
}, 0);

fs.readFile(__filename, () => {
  console.info("this is readfile.1");
});
