// console.info(arguments);

console.info(require('module').wrapper);
const C = require('./test-module-1');
const { add, multiply, divide } = require('./test-module-2');

const calc = new C();

console.info(calc.add(2, 3));
console.info(add(2, 3));

require('./test-module-3')();
