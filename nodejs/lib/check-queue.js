const fs = require("node:fs");

setTimeout(() => {
  console.info("this is timeout 1")
}, 0);

setImmediate(() => {
  console.info("this is immadate 1")
  
})

// fs.readFile(__filename, () => {
//   console.info("this is readfile")
// })

setImmediate(() => console.log("this is setImmediate 1"));
setImmediate(() => {
  console.log("this is setImmediate 2");
  process.nextTick(() => console.log("this is process.nextTick 1"));
  Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
});
setImmediate(() => console.log("this is setImmediate 3"));

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.info("this is readfile.1");
//   setImmediate(() => {
//     console.info("This is Immadate.1 inside readfile");
//   });

//   process.nextTick(() => console.info("This is nextic.1 inside set time otu"));

//   Promise.resolve().then(() =>
//     console.info("this is Promis.1 inside set time otu"),
//   );
// });

// process.nextTick(() => console.info("This is nextic.1"));

// Promise.resolve().then(() => console.info("this is Promis.1"));

// setTimeout(() => {
//   console.info("this is timeout.1");
// }, 0);
