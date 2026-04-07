//Exsporting Module

console.info('Exsporint module');

export const cart = [];

console.info('star facthing user');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
console.info('fnish facthing user');

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });

    console.info(`${quantity},${product} add to cart`);
}

const totalPrice = 227;
const totalQuantity = 34;

export { totalPrice, totalQuantity as qt }