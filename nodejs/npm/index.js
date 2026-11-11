const { isUpperCase } = require("text-is-upper-case");
// const localModul = require("./path-to-module");
const fs = require("node:fs");
function greet(nama) {
  console.info(`Hello nama saya ${nama}`);
}

console.info(isUpperCase("Muhamad Rayhan "));

module.exports = greet;
