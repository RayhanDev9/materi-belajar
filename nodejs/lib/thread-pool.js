const fs = require("node:fs");
const crypto = require("node:crypto");

console.info("frist");

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.info("File Content");
});

console.info("Last");

const MAX_CALLS = 3;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}

// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);
