const { error } = require("node:console");
const fs = require("node:fs/promises");

// fs.readFile("./file.txt", "utf-8")
//   .then((data) => console.info(data))
//   .catch((error) => console.info(error));

async function readFile() {
  try {
    const data = await fs.readFile("./file.txt", "utf-8");
    console.info(data);
  } catch (error) {
    console.info(error);
  }
}

readFile();
