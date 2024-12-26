'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

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



const displayMovemnets = function (movements, sort = false) {
  containerMovements.textContent = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type} </div>
          <div class="movements__value">${mov}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

const calcDisplayBlanc = function (acc) {
  acc.blance = acc.movements.reduce((acc, cur) => acc + cur);
  labelBalance.textContent = `${acc.blance}€`;
}

const calcDisplaySummary = (acc) => {
  const inCome = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${inCome}€`;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate) / 100).filter(int => int > 1).reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${interest}€`;

}

const createUserName = (accs) => {

  accs.forEach(acc => {
    acc.userName = acc.owner.toLowerCase().split(' ').map(n => n[0]).join('');
  })
}

const updateUI = (acc) => {
  // Display Movments
  displayMovemnets(acc.movements);

  // Display Blance
  calcDisplayBlanc(acc);

  // Display Summary
  calcDisplaySummary(acc);
}


// Ecent Handlesr
let crureentAccount;

btnLogin.addEventListener('click', e => {
  // Add object userName to acconts
  createUserName(accounts);

  // prevent from from submiting
  e.preventDefault();

  console.info(accounts);
  // console.info(accounts.userName);

  console.info(account1.userName === inputLoginUsername.value);

  // Menemukan akun,sesuai nama pengguna
  crureentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value);
  console.info(crureentAccount);

  // Memeriksa apakah kata sandinya sesuai atau tidak
  console.info(crureentAccount);
  if (crureentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Message
    labelWelcome.textContent = `WelCom back,${crureentAccount.owner.split(' ')[0]}`

    containerApp.style.opacity = '1';

    // Clear input filds
    inputLoginPin.value = inputLoginUsername.value = '';

    //  Update UI
    updateUI(crureentAccount);

  }

})

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(acc => acc.userName === inputTransferTo.value
  );

  inputTransferTo.value = inputTransferAmount.value = '';

  if (amount > 0 &&
    reciverAcc &&
    crureentAccount.blance >= amount &&
    reciverAcc?.userName !== crureentAccount.userName
  ) {
    console.info(amount);
    crureentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);
    updateUI(crureentAccount);

  }
})

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && crureentAccount.movements.some(mov => mov >= amount * 0.1))
    crureentAccount.movements.push(amount);
  updateUI(crureentAccount);
  inputLoanAmount.value = '';
})

btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (crureentAccount.userName === inputCloseUsername.value &&
    crureentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(acc => acc.userName === crureentAccount.userName);
    accounts.splice(index, 1);
    console.info(index);
    //  Delet UI
    containerApp.style.opacity = '0';
    inputClosePin.value = inputCloseUsername.value = '';
  }
})

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovemnets(crureentAccount.movements, !sorted);
  sorted = !sorted;
});




















// Simple Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// JOIN
// console.log(letters.join(' - '));

/*
///////////////////////////////////////
//The new at Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

*/
/*
///////////////////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
const elNew = [];
movements.forEach(function (mov, i, arr) {
    elNew.push(mov)
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
movements.forEach(function (e,i) {
    console.info(`${i + 1} : ${e}`);
})


// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
*/
/*
///////////////////////////////////////
// forEach With Maps and Sets
// Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

  currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
  });


  // Set
  const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
  console.log(currenciesUnique);
  currenciesUnique.forEach(function (value, _, map) {
    console.log(`${value}: ${value}`);
  });
*/
/*
// Map()
const newMovements = account1.movements.map(mov => mov * 2);
console.info(newMovements);

const movementsDescreption = account1.movements.map((mov, i, arr) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
  mov
)}`)

console.info(movementsDescreption);
*/

/*
// Filter()
const deposit = account1.movements.filter((dep, i, arr) => dep > 0)

let depositFor = []
for (const dep of deposit) if (dep > 0) depositFor.push(dep);

console.info(deposit);
console.info(depositFor);

const withdrawal = account1.movements.filter(dra => dra < 0)
console.info(withdrawal);
*/


/*
Redunce()
const blance = account1.movements.reduce(function (acc, cur, i, arr) {
  console.info(`Iteration ${i} : ${acc} + ${cur}`);
  return acc += cur;
}, 100);

const blance = account1.movements.reduce((acc, cur) => acc += cur, 0);

console.info(blance);

let blanceFor = 0;

for (const blc of account1.movements) blanceFor += blc;
console.info(blanceFor);
const valueNegatif = [-1222,-444,-555];
const max = valueNegatif.reduce((acc, cur) => {
  if (acc > cur) {
    console.info('ok');
    return acc
  } else {
    return cur
  }
},valueNegatif[0]);
console.info(max);
*/
/*
///////////////////////////////////////
// The Magic of Chaining Methods
const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = account1.movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// Find()

const fristWithdrawal = account1.movements.find(mov => mov < 0);

console.info(fristWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jonas Schmedtmann'
)

// console.info(account);

let accountFor;

for (const acc of accounts) {
  if (acc.owner === 'Jonas Schmedtmann') { accountFor = acc.owner }
};
// console.info(accountFor);
*/


// findLast() and findLastIndex()
/*
console.log(account3.movements);
const lastWithdrawal = account3.movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

// 'Your latest large movement was X movements ago'

const mithdrewel = account3.movements.findLastIndex(mov => `${Math.abs(mov)}` < 1000);
console.info(mithdrewel);
console.info(`Your latest ${ account1.movements.length - mithdrewel } movement was X movements ago`)
*/

/*
// Some() adn every()
//Equality()
console.info(account1.movements);
console.info(account1.movements.includes(-130));

//Condition : some metode
const anyDeposit = account1.movements.some(mov => mov > 0);
console.info(anyDeposit);

//Condition : every metode
console.info(account4.movements.every(mov => mov => 0));

// Separate Callback
const deposit = mov => mov => 0;
console.info(account4.movements.some(deposit))
console.info(account4.movements.filter(deposit))
console.info(account4.movements.some(deposit))

*/
/*
///////////////////////////////////////
// flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8, [9, [10, [11, 12, 13]]]];
console.log(arrDeep.flat(2));
console.log(arrDeep.flat(3));

// const  accountMov = accounts.map(mov => mov.movements );

// const allMov = accountMov.flat();

// const overalBlance = allMov.reduce((acc,mov) => acc + mov,0);
// console.info(accountMov,allMov,overalBlance);

const overalBlance = accounts.map(mov => mov.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.info(overalBlance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
*/
/*
///////////////////////////////////////
Sorting Arrays

Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

Numbers
console.log(movements);

return < 0, A, B (keep order)
return > 0, B, A (switch order)

Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
movements.sort((a, b) => a - b);
console.log(movements);

Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
movements.sort((a, b) => b - a);
console.log(movements);
*/

// ////////////////
// Gruping Metode
/*
const grupMovmenst = Object.groupBy(account1.movements, (movements) => movements > 0 ? 'deposit' : 'withdrewal');

const groupByActive = Object.groupBy(accounts, acc => {
  const lengthArray = acc.movements.length;
  if (lengthArray >= 8) return 'very active';
  if (lengthArray >= 6) return 'active';
  if (lengthArray >= 1) return 'moderate';
  return 'inactive'

})

const acountType1 = Object.groupBy(accounts,(account) => account.type);
const acountType2 = Object.groupBy(accounts,({type}) => type);
console.info(acountType1);

console.info(grupMovmenst);
console.info(groupByActive);
*/

///////////////////////////////////////
// More Ways of Creating and Filling Arrays
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
x.fill(9)
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const r = Array.from({ length: 9 }, () => 10);
console.info(r);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);


  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.info(movementsUI);
})
  */

/*
metode toReverse,toSorted,toSplice and with
const arr = [1, 2, 3, 4, 5];
console.info(arr.toReversed().toSorted().toSpliced(1,2,3,4));
console.info(arr);

Metode with
const arrCopy = arr.with(2,4);
console.info(arrCopy);
*/
/*
// Array peractic
//1.)
const arrayDeposit = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.info(arrayDeposit);

//2.)

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;


const newDeposti1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => mov >= 1000 ? acc + 1 : acc, 0);
console.info(newDeposti1000);


// Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 },
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/