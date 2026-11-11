// PowerShell: $env:UV_THREADPOOL_SIZE = "6"; node .\thread-pool-size.js
const crypto = require("node:crypto");

const MAX_CALLS = 8;
const start = Date.now();

console.info(
  `UV_THREADPOOL_SIZE: ${process.env.UV_THREADPOOL_SIZE || "4 (default)"}`,
);

for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.info(`Hash ${i + 1} completed in ${Date.now() - start} ms`);
  });
}
