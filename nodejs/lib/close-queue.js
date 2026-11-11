const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () =>
  console.info("This is from readableStream close event callback"),
);

Promise.resolve().then(() => console.info("this is Promis.1"));
process.nextTick(() => console.info("This is nextic.1"));
setImmediate(() => console.log("this is setImmediate 1"));
setTimeout(() => {
  console.info("this is timeout 1");
}, 0);
