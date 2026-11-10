const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();
const readtableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writetableStream = fs.createWriteStream("./file2.txt");

// readtableStream.on("data", (chunk) => {
//   console.info(chunk);
//   writetableStream.write(chunk);
// });

readtableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

readtableStream.pipe(writetableStream);
