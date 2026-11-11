const fs = require("node:fs");

// fs.readFile(__filename, () => {
//   console.info("this is readfile")
// })

fs.readFile(__filename, () => {
  console.info("this is readfile.1");
});

process.nextTick(() => console.info("This is nextic.1"));

Promise.resolve().then(() => console.info("this is Promis.1"));

setTimeout(() => {
  console.info("this is timeout.1");
}, 0);

setImmediate(() => {
  console.info("This is Immadate.1");
});
