'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2025-01-01T21:31:17.178Z',
        '2025-01-05T07:42:02.383Z',
        '2025-01-01T09:15:04.904Z',
        '2025-01-10T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-07-26T17:01:17.194Z',
        '2020-07-28T23:36:17.929Z',
        '2020-08-01T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
    const calcDaysPassed = (date1, date2) =>
        Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), date);

    if (daysPassed === 0) return 'Today';
    if (daysPassed === 1) return 'Yesterday';
    if (daysPassed <= 7) return `${daysPassed} days ago`;

    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = (locale, currency, mov) => {
    return Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(mov);
}

const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = '';

    const combinedMovsDates = acc.movements.map((mov, i) => ({
        movement: mov,
        movementDate: acc.movementsDates.at(i),
    }));

    if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);


    combinedMovsDates.forEach(function (obj, i) {
        const type = obj.movement > 0 ? 'deposit' : 'withdrawal';
        let waktu = formatMovementDate(new Date(obj.movementDate), acc.locale);
        console.info(waktu);
        console.info(obj.movementDate)

        const formetter = formatCur(acc.locale, acc.currency, obj.movement);




        const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
            } ${type}</div>
        <div class="movements__date">${waktu.toLowerCase()}</div>
        <div class="movements__value">${formetter}</div>
      </div>
    `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const calcDisplayBalance = function (acc) {
    const result = acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    const formetter = formatCur(acc.locale, acc.currency, result);
    labelBalance.textContent = `${formetter}`;
    console.info(acc);


};

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${formatCur(acc.locale, acc.currency, incomes)}`;


    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${formatCur(acc.locale, acc.currency, Math.abs(out))}`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${formatCur(acc.locale, acc.currency, interest)}`;
};

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
createUsernames(accounts);

const updateUI = function (acc) {
    // Display movements
    displayMovements(acc);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
};


const funTimerLogut = () => {
    const tick = () => {
        if (second === 0) {
            minute--;
            second = 1 * 60;
        };
        second--;
        let minuteS = `${minute}`.padStart(2, '0');
        let secondS = `${second}`.padStart(2, '0');
        let waktu = `${minuteS}:${secondS}`;
        labelTimer.textContent = waktu;

        if (minute === 0) {
            clearInterval(tick);
            // Display UI and message
            labelWelcome.textContent = `Log in to get started`;
            containerApp.style.opacity = 0;
        };
    };
    let second = 60;
    let minute = 5;

    // call timer
    tick();
    const timer = setInterval(tick, 1000);

    return timer;

}

// console.info(funTimerLogut);

///////////////////////////////////////
// Event handlers
let currentAccount, timerGlo;


btnLogin.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();


    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
            }`;
        containerApp.style.opacity = 1;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        // const date = new Date(Date.now());
        const date = new Date();
        const options = {
            minute: 'numeric',
            hour: 'numeric',
            day: 'numeric',
            weekday: 'long',
            month: 'long',
            // year :'2-digit'
            year: 'numeric'
        }
        // const locale = navigator.language;
        labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(date);
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, 0);
        const tanggal = `${date.getDate()}`.padStart(2, 0);
        const day = date.getDay();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        // labelDate.textContent = `${tanggal}/${month}/${year},${hours}:${minutes}`;
        // console.info(date);

        // Timer Logout
        if (timerGlo) clearInterval(timerGlo);
        timerGlo = funTimerLogut();





        // Update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';

    if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
    ) {
        // Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        currentAccount.movementsDates.push(new Date(Date.now()));


        // Update UI
        updateUI(currentAccount);
    }
        // Reset Timmer
        if (timerGlo) clearInterval(timerGlo);
            timerGlo = funTimerLogut();
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Math.floor(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        setTimeout(() => {
            // Add movement
            currentAccount.movements.push(amount);
            currentAccount.movementsDates.push(new Date(Date.now()));

            // Update UI
            updateUI(currentAccount);
        }, 3000);
    }
    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.username &&
        Number(inputClosePin.value) === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            acc => acc.username === currentAccount.username
        );
        console.log(index);
        // .indexOf(23)

        // Delete account
        accounts.splice(index, 1);

        // Hide UI
        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount, !sorted);
    sorted = !sorted;
});



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
///////////////////////////////////////
// Converting and Checking Numbers
console.log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
let angkaDesimal = 13;
let angkaBiner = angkaDesimal.toString(2);
console.log(angkaBiner); // Output: "1101"
let angkaDesimalParse = parseInt(angkaBiner, 2);
console.log(angkaDesimalParse); // Output: 13


// Conversion
console.log(Number('23'));
console.log(+'23');
console.info(Number('09'));
console.info(+('09'));

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));


console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));

// console.log(parseFloat('  2.5rem  '));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
*/

/*
///////////////////////////////////////
// Math and Rounding

console.log(Math.sqrt(25));
console.log(Math.sqrt(16));
console.log(Math.sqrt(100));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
console.info(8 ** 3);

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));
console.log(Math.min(5, 18, '23', 11, 2));
console.log(Math.min(5, 18, '23px', 11, 2));

console.info(Math.PI);
console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.info(Number.parseFloat('10px') ** 2 * 3.141592653589793)

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

// Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));
*/

/*
///////////////////////////////////////
// The Remainder Operator
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click',function () {
    const el = [...document.querySelectorAll('.movements__row')];
   el.forEach((row,i) => {
    if(i % 2 === 1 ) {
        row.style.backgroundColor ='blue';
    }
   })
console.info(el);
})
*/

/*
///////////////////////////////////////
// Numeric Separators

let hex = 0xFF_FF_FF_FF;
console.log(hex);  // Output: 4294967295

let binary = 0b1010_1011_1100_1111;
console.log(binary);  // Output: 43981

let octal = 0o77_77_77;
console.log(octal);  // Output: 8388607


// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const luasTanah = 100_000 * 120_000;
console.info(luasTanah);

const price = 345_99;
console.log(price);

const harga = 30_400;
console.info(harga);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000'));
console.info(Number('233_009'))
console.info(parseInt('233_009'))
console.log(parseInt('230_000'));
console.log(parseFloat('230_000'));
*/

/*
///////////////////////////////////////
// Working with BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));

// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n));

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);

*/
/*
///////////////////////////////////////
// Creating Dates

// Create a date

const now = new Date();
console.log(now);
console.info(new Date('Tue Jan 07 2025 17:00:42'))
console.info(new Date('Juli 09 2005 02:09:34'));
console.log(new Date(account1.movementsDates[1]));
console.info(new Date(2005,7,9,2,30,50));
console.info(new Date(2005,7,9));
console.info(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));



console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));

*/

/*
// // Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.info(future.getFullYear())
console.info(future.getMonth())
console.info(future.getDate())
console.info(future.getDay())
console.info(future.getHours())
console.info(future.getMinutes())
console.info(future.getSeconds())

console.info(future.toISOString())
console.info(future.getTime())

// console.log(future.toISOString());
// console.log(future.getTime());

console.log(new Date(2142231780000));

const sekarang = Date.now();
console.info(new Date(1736244679355))
future.setFullYear(2040);
future.setDate(12);

console.log(future);
*/

/*
// Operations With Date
const calcDaysPassd = (date1, date2) => Math.floor(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

const day1 = calcDaysPassd(new Date(account1.movementsDates[0]), new Date(Date.now()))
console.info(day1);
*/

/*
///////////////////////////////////////
// Internationalizing Numbers (Intl)
const num = 3884764.23;

const options = {
    style: 'unit',
    unit: 'celsius',
    currency: 'EUR',
    //   useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(num)
);
console.log('id-ID', new Intl.NumberFormat(navigator.language, options).format(num)
);

console.info('en-US', Intl.NumberFormat('en-US', options).format(num));

*/

/*
///////////////////////////////////////

// setTimeOut()
const sayuran = ['cabai', 'wortel'];

const pizzaTimer = setTimeout((bahan1, bahan2) => {
    console.info(`ini bahan pizza kamu ${bahan1},${bahan2} `)

}, 3000, ...sayuran);

if (sayuran.includes('bayam')) clearTimeout(pizzaTimer);

//setInterval()

setInterval (() => {
    const dateInteval = new Date();
    const hours =`${dateInteval.getHours()}`.padStart(2, '0');
    const minute = `${dateInteval.getMinutes()}`.padStart(2, '0');
    const second = `${dateInteval.getSeconds()}`.padStart(2, '0');
    console.info(`${hours}:${minute}:${second}`);
},1000);

*/

