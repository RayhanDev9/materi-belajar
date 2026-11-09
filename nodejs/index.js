const path = require("node:path");
const PizzShop = require("./pizza-shop");

const pizzaShop = new PizzShop();

pizzaShop.on("order", (size, topping) => {
  console.info(`Hello ${size}, ${topping}`);
});

pizzaShop.order("large", "mushrooms");
pizzaShop.display();

require("./callback-pettren");

// console.info(path.join("folder1", "folder2", "index.html"));
// console.info(path.join("/folder1", "folder2", "index.html"));
// console.info(path.join("/folder1", "//folder2", "index.html"));
// console.info(path.join("folder1", "folder2", "../index.html"));
// console.info(path.join(__dirname, "module-local/data.json"));

// console.info(path.resolve("folder1", "folder2", "index.html"));
// console.info(path.resolve("/folder1", "folder2", "index.html"));
// console.info(path.resolve("/folder1", "//folder2", "index.html"));
// console.info(path.resolve("folder1", "folder2", "../index.html"));
// console.info(path.resolve(__dirname, "module-local/data.json"));

// console.info(__filename);
// console.info(__dirname);

// console.info(path.basename(__filename));
// console.info(path.basename(__dirname));

// console.info(path.extname(__filename));
// console.info(path.extname(__dirname));

// console.info(path.parse(__filename));
// console.info(path.format(path.parse(__filename)));

// console.info(path.isAbsolute(__filename));
// console.info(path.isAbsolute("./module-local/data.json"));
