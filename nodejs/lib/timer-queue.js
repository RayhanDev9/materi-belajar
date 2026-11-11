setTimeout(() => {
  console.info("this is time out 1")
}, 1000);

setTimeout(() => {
  console.info("this is time out 2")
}, 500);
setTimeout(() => {
  console.info("this is time out 3")
}, 0);

// setTimeout(() => {
//   console.info("This is time out 1")
// }, 0);

// setTimeout(() => {
//   console.info("This is time out 2")
//   process.nextTick(() => {
//     console.info("this is inner next tick inside timeout")
//   })
// }, 0);

// setTimeout(() => {
//   console.info("This is time out 3")
// }, 0);


// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside next tick")
//   );
// });
// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside Promise then block")
//   );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));
