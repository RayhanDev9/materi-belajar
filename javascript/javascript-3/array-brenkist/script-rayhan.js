'use strict';
////////////////////////////////////////////////
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


const hitungSaldoDanPenarikan = (movements, sort = false) => {
    containerMovements.innerHTML = '';
    const movs = sort ? movements.toSorted((a, b) => a - b) : movements;
    movs.map((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const tampilan = `<div class="movements">
         <div class="movements__row">
                <div class="movements__type movements__type--${type}"> ${i + 1} ${type} </div>
                <div class="movements__value">${mov}</div>
            </div>
        </div>`;

        containerMovements.insertAdjacentHTML("afterbegin", tampilan)
    });
}

const calcDisplayBlanc = (account) => {
    labelBalance.textContent = account.reduce((acc, account) => acc = acc + account) + '€';
}

const calcDisplaySummary = (account) => {
    labelSumIn.textContent = account.movements.filter(account => account > 0).reduce((acc, account) => acc = acc + account) + '€';

    labelSumOut.textContent = Math.abs(account.movements.filter(account => account < 0).reduce((acc, account) => acc = acc + account)) + '€';

    labelSumInterest.textContent = Math.floor(account.movements.filter(mov => mov > 0).map(deposit => (deposit * account.interestRate) / 100).filter(int => int > 1).reduce((acc, int) => acc + int)) + '€';

}
// User Name
accounts.map(account => {
    const accountS = account.owner;
    const nama = accountS.split(' ').map(acc => acc.slice(0, 1).toLowerCase()).join().replaceAll(',', '');
    return account.userName = nama;
});
const updateUI = () => {
    hitungSaldoDanPenarikan(crureentAccount.movements);
    calcDisplayBlanc(crureentAccount.movements);
    calcDisplaySummary(crureentAccount);
}



console.info(accounts);
// Event hanledrs
let crureentAccount;
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    crureentAccount = accounts.find(account => account.userName === inputLoginUsername.value.toLowerCase());
    console.info(crureentAccount);
    if (crureentAccount?.pin === Number(inputLoginPin.value)) {
        containerApp.style.opacity = '1';
        labelWelcome.textContent = `Selamat Datang, ${crureentAccount.owner.split(' ')[0]} `;
        crureentAccount.blance = crureentAccount.movements.reduce((acc, mov) => acc = acc + mov);
        updateUI();
    }


})

btnTransfer.addEventListener('click', (e) => {
    e.preventDefault();
    // Penerima
    const penerima = accounts.find(account => account.userName === inputTransferTo.value);
    const amount = Number(inputTransferAmount.value);

    console.info(amount, penerima)
    // console.info(penerima);
    if (penerima && penerima?.userName !== crureentAccount.userName && amount > 0 && crureentAccount.blance >= amount) {
        crureentAccount.blance = crureentAccount.blance - amount;
        crureentAccount.movements.push(-amount);
        penerima.movements.push(amount);
        updateUI()
    }
    inputTransferTo.value = inputTransferAmount.value = '';
});

btnLoan.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    const deposit = Math.floor(amount * 0.1);
    console.info(deposit);
    if (crureentAccount.blance > deposit) {
        console.info('ok');
        crureentAccount.movements.push(amount);
        inputLoanAmount.value = '';
        updateUI();
    }
});

btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    const indexRemoveAcc = accounts.findIndex(account => account === crureentAccount);
    console.info(indexRemoveAcc);
    if (inputCloseUsername.value === crureentAccount.userName && Number(inputClosePin.value) === crureentAccount.pin) {
        console.info('ok')
        containerApp.style.opacity = '0';
        accounts.splice(indexRemoveAcc, 1);
        updateUI();
        inputClosePin.value = inputCloseUsername.value = '';
    }
})


let sorted = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    hitungSaldoDanPenarikan(crureentAccount.movements, !sorted);
    sorted = !sorted;
});