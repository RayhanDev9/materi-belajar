const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-Pizza", (size, tooping) => {
  console.info(`Hello ${size}, ${tooping}`);
});

emitter.on("order-Pizza", (size) => {
  if (size === "large") {
    console.info("Serving complrty drink");
  }
});

console.info("Do work before pizza");
emitter.emit("order-Pizza", "large", "mushrooms");
