'use strict'

let bookings = [];

const createBooking = function (flightNum, numpassangers = 1, price = 99 * numpassangers) {
    const booking = {
        flightNum,
        numpassangers,
        price
    }

    // console.info(booking);
}
createBooking('LHT3');
createBooking('LHT3', 2);
createBooking('LHT3', 2, 100);
createBooking('LHT3', undefined, 100);

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284,
    age: 20
};

console.info(jonas);

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 24739479284) {
        // alert('Checked in');
    } else {
        // alert('Wrong passport!');
    }
};

checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
};


const newAge = function (age) {
    jonas.age = Math.floor(Math.random() * 20 + 1);
}
newAge(jonas);
newPassport(jonas);
checkIn(flight, jonas);

let angka = [1, 2, 3];

function tambahAngka(arr) {
    arr.push(4);  // Menambah elemen baru ke dalam array
}

tambahAngka(angka);

// console.log(angka);  // Output: [1, 2, 3, 4]

///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const kapitalizeWord = function (str) {
    const kapitalize = str.split(' ');
    let words = '';
    console.info(kapitalize);
    for (const word of kapitalize) {
        words += `${word.replace(word[0], word[0].toUpperCase())} `;
    }
    return words;
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
    // console.log(`Original string: ${str}`);
    // console.log(`Transformed string: ${fn(str)}`);

    // console.log(`Transformed by: ${fn.name}`);
    // console.info('');
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
transformer('JavaScript is the best!', kapitalizeWord);

// JS uses callbacks all the time
const high5 = function () {
    // console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);


///////////////////////////////////////
// Functions Returning Functions
const greet = function (greeting) {
    return function (name) {
        // console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greetArrow = (greeting) => {
    return (name) => console.info(`${greeting} ${name}`);
}
const greeatHeyArrow = greet('Hey');
greeatHeyArrow('Jonas');
greeatHeyArrow('Steven');


///////////////////////////////////////
// The call and apply Methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        // console.log(
        //     `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        // );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

const asia = {
    airline: 'Asia Air Lines',
    iataCode: 'As',
    bookings: [],
}

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method

book.call(lufthansa, 239, 'Mary Cooper');
book.call(lufthansa, 999, 'Robin Cooper');
//   console.log(lufthansa);

book.call(eurowings, 23, 'Sarah Williams');
//   console.log(eurowings);

book.call(swiss, 583, 'Mary Cooper');

book.call(asia, 788, 'Dedi Mulyadi');
//   console.info(asia);

//   Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
book.apply(swiss, [455, 'Angelica Renardo']);
//   console.log(swiss);

//   Cara yang lebih mudah lagi mengguaka call(),
book.call(swiss, ...flightData);

///////////////////////////////////////
// The bind Method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
const bookJX = book.bind(lufthansa);

bookJX(222, 'Wiliam Roger');
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
bookEW23('Marcha Ronda');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    // console.log(this.planes);
    // console.log(this);

    this.planes++;
    // console.log(this.planes);
};
// lufthansa.buyPlane();

document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane);

// Partial application
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
//   console.log(addVAT2(100));
//   console.log(addVAT2(23));
//   console.info(addTaxRate(0.44)(100));

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
    console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();

(function () { console.info('Hanya di jalankan sekali') })();
// console.log(isPrivate);

(() => { console.log('This will ALSO never run again') })();
(() => { console.info('Arrow hanya di jalankan sekali') })()
{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);

///////////////////////////////////////
// Closures
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);


///////////////////////////////////////
// More Closure Examples
// Example 1
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

const i = function () {
    const c = 77;
    f = function () {
        console.log(c * 2);
    };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);
// Re-assigning i function
i();
f();
console.dir(f);


// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);


///////////////////////////////////////
// Coding Challenge #2

/*
This is more of a thinking challenge than a coding challenge 🤓
 
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
 
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
 
GOOD LUCK 😀
*/


// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
 
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

