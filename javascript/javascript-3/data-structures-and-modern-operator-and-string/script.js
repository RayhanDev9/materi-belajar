'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';



// Data needed for first part of the section
const allDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [allDays[3]]: {
        open: 12,
        close: 22,
    },
    [allDays[4]]: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 7, // Open 24 hours
        close: 24 - 3,
    },
}
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // Enhanced Object Literals 
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDlivery({ starterIndex = 0, mainIndex = 1, time = '20.00', addres }) {
        // console.info(`Order recived : ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will delevered to ${addres} at ${time}`)
    },
    orderpasta(bahan1, bahan2, bahan3) {
        // console.info(`Saya menbutuhkan 3 bahan : ${bahan1}, ${bahan2}, ${bahan3}`)
    },
    othersPizza(mianIngradient, ...others) {
        // console.info(mianIngradient)
        // console.info(others)
    }
};
// Working to srting part 3
// console.info('Muhamad Rayhan Age 30'.split(' '));
// console.info('Muhamad+Rayhan+Age+30'.split('+'));
const [fristName, lastName, umur] = 'Muhamad+Rayhan+Age:30'.split('+');
// console.info(fristName, lastName, umur);
const newInfo = [fristName.toUpperCase(), lastName.toUpperCase(), umur].join(' ');
// console.info(newInfo);

// menggunakan function
const nameKapitalize = function (name) {
    const names = name.split(' ');
    const kapitalize = [];
    for (const n of names) {
        // kapitalize.push(n.toUpperCase() + n.slice(1));
        // kapitalize.push(n.replace(n[0],n[0].toUpperCase()));
    }
    // console.info(kapitalize.join(' '));
}


nameKapitalize('muhamad rayhan');
// Padding
// console.info('Muhamad Rayhan'.padStart(25, '*').padEnd(30, '*'));

function maskCreditCard(numbers) {
    const str = numbers + '';
    const last = str.slice(-4);
    // console.info(str,last,last.padStart(str.length , '*'));
    return last.padStart(str.length , '*');
}


// console.info(maskCreditCard(123456));
// Repeat 
const message2 = 'Keberangkatan pesawat tertunda';
// console.info(message2.repeat(3));

const bussInline = function (n) {
    // console.info(`There are ${n} bus in line ${'🚙'.repeat(n)}`)
}

bussInline(3);

// concat 
const fristName2 = 'Muhamad';
const lastName2 = 'Rayhan';

// console.info(fristName.concat(' ',lastName));

const greatList = ['Muhamad',' ','Rayhan'];
// console.info("".concat(...greatList))

// Working to srting part 2
// Fix capitalize in name
const nama = 'RaYhAn';
const namaLowerCase = nama.toLowerCase();
const namaCapitalize = namaLowerCase[0].toUpperCase() + namaLowerCase.slice(1);
// console.info(namaCapitalize);

// comprasion emali
const email = 'rayhan@gmail.com';
const loginEmail = '    RaYhan@gmail.com\n'
// console.info(loginEmail);
// const lowerEmail = loginEmail.toLowerCase();
// const trimEmail = lowerEmail.trim();
// Sekaligus 2 metode
const normalLizedEmail = loginEmail.toLowerCase().trim()
// console.info(normalLizedEmail);

//Replace
const priceEuro = '234,5E'
const priceDolar = priceEuro.replace('E', '$').replace(',', '.');
// console.info(priceDolar);



const announcoment = `All pasangres come to boarding door 23.Boarding door 23!`;
// console.info(announcoment.replace('door','gate'));
// Cara dulu untuk meraplace semua
// console.info(announcoment.replace(/door/g,'gate'));
//Cara yang baru untuk meraplce semua
// console.info(announcoment.replaceAll('door','gate'));
// Working to srting part 1
const airPlane = 'TAP Air Indonesia';
const plane = 'BA34';

//Boolean
const plane2 = 'AirBus A34S';
// console.info(plane2.includes('Air'));
// console.info(plane2.includes('Airs'));
// console.info(plane2.startsWith('Air'));
// console.info(plane2.endsWith('4S'));

if (plane2.startsWith('Air') && plane2.endsWith('4S')) {
    // console.info(`Ini adalah bus kerluarga anda`);
}

// Example
const inPlane = function (item) {
    const inPlane = item.toLowerCase();
    //  inPlane.includes('pistol') || inPlane.includes('bom') ? console.info('Tidak Boleh Membawa Pistol Atau Bom') : console.info('Anda Boleh Masuk');

}

inPlane('Saya Membawa Pistol');
inPlane('Saya Membawa Camera');
inPlane('Saya Membawa Bola');

// console.info(airPlane[0]);
// console.info(airPlane[2]);
// console.info('BR34'[0]);

// console.info(plane.length);
// console.info('BR34'.length);


// console.info(airPlane.indexOf('i'));
// console.info(airPlane.lastIndexOf('i'));
// console.info(airPlane.indexOf('Indonesia'));

// console.info(airPlane.slice(4));
// console.info(airPlane.slice(4,7));

// console.info(airPlane.slice(0,airPlane.indexOf(' ')));
// console.info(airPlane.slice(airPlane.lastIndexOf(' ') + 1));

// console.info(airPlane.slice(-2));
// console.info(airPlane.slice(1,-1));

function checkMiddleSheat(sheat) {
    const s = sheat.slice(-1);

    // // s === 'B' || s === 'E' ? console.info(`You go to middle sheat 😊`) : console.info(`You go to lucky 😎`);
}
checkMiddleSheat('D3E');
checkMiddleSheat('D3I');
checkMiddleSheat('D3IB');

// console.info(typeof new String('Jones'))
// console.info(typeof new String('Jones').slice(1))

///////////////////////////

// Mpas iteration
const question = new Map([
    ['question', 'what the bast progreming language in the world ?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct🎉'],
    [false, 'Try Again!!']
]);
// console.info(question);

// Conversi object to map
// console.info(Object.entries(openingHours));
const hoursMaps = new Map(Object.entries(openingHours));
// console.info(hoursMaps);
// Quiz app
// console.info(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') {
        // console.info(`Answer ${key} : ${value}`);
    }
}

const answer = 3;
// console.info(answer);

// console.info(question.get(answer === question.get('correct')));
// Convert map to array
// console.info([...question]);
// console.info([...question.entries()]);
// console.info([...question.keys()]);
// console.info([...question.values()]);





// Maps fundamental
let res = new Map();
res.set('name', 'italiano');
res.set(1, 'frinzo, itali');
// console.info(res.set(2,'lisbon, portugal'))

res
    .set('catagories', ['Italian', 'Vizeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are close :D')

// console.info(res.get('name'));
// console.info(res.get(true));
// console.info(res.get(false));

// console.info(res);

const time = 12;
// console.info(res.get(time > res.get('open') && time < res.get('close')));
// console.info(res.has('catagories'));
res.delete(2);
// res.clear();
// console.info(res);
// console.info(res.size);
const arr3 = [1, 2];
res.set(arr3, 'Test');
// console.info(res.get(arr3))


// New Operation to make sets useful!
const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
]);

const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
]);
const commonFoods = italianFoods.intersection(mexicanFoods);
// console.info('Intersection' , commonFoods);
// console.info([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.info('Union', italianMexicanFusion);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.info('Diffrance italian', uniqueItalianFoods);
const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.info('Diffrance Mexican', uniqueMexicanFoods);

const uniqueItalianFoodsdanMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
// console.info('symmetricDifference', uniqueItalianFoodsdanMexicanFoods);

// console.info('isDisjointFrom',italianFoods.isDisjointFrom(mexicanFoods));


// Set 
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Resisto', 'Pasta']);
// console.info(orderSet);
// console.info(new Set('Jonnes'));
// console.info(orderSet.size);
// console.info(orderSet.has('Pizza'));
// console.info(orderSet.has('Burger'));
orderSet.add('Garlic Briach');
orderSet.add('Garlic Briach');
orderSet.delete('Risisto');
// orderSet.clear(orderSet);
// console.info(orderSet);

for (const order of orderSet) {/* console.info(order)*/ };

// contoh
const staf = ['chef', 'witer', 'manajer', 'chef', 'witer'];
// console.info(staf)
// console.info(new Set(staf))
// console.info([...new Set(staf)]);

// console.info(new Set(['chef','witer','manajer','chef','witer']).size)


// Property Names

const properties = Object.keys(openingHours);
// console.info(properties);

let openStr = `We are open ${properties.length} days : `
for (const day of properties) {
    openStr += `${day}, `;
}
// console.info(openStr);

// Property Values
const values = Object.values(openingHours);
// console.info(values);

// Entries Property
const entries = Object.entries(openingHours);
// console.info(entries);

for (const [day, { open, close }] of entries) {
    // console.info(`On Day ${day} we open at ${open} and close at ${close}`);
}

// optional chaining
// console.info(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'Closed';
    // console.info(`On ${day}, We open at ${open}`);
}

// Optional Chaining in method
// console.info(restaurant.order?.(2,1) ?? 'Methode Does Not Exist')
// console.info(restaurant.orderList?.(2,3) ?? 'Methode Does Not Exist')

// Optional Chaining in Array
const users = [{ name: 'Rayhan', gmail: 'Rayhan@gmail.com' }];
// console.info(users[0]?.name ?? 'User Array Empaty');
// console.info(users[0]?.nameKosong ?? 'User Array Empaty');



// For Of
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.info(menu2);

// for (const item of menu2) console.info(item);
// for (const item of menu2.entries()) console.info(item);

// Cara Yang Lama
// for (const item of menu2.entries()) console.info(`${item[0] + 1} : ${item[1]}`)
// Cara Yang Baru
// for (const [i,el] of menu2.entries()) console.info(`${i + 1} : ${el}`);

// console.info([...menu2.entries()])
// Logical Operator Assigment
const rest1 = {
    nama: 'Capri',
    numGuests: 0,
}
const rest2 = {
    nama: 'La Fiza',
    owner: 'Giovana Rossi',
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR Assigment Operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nulish Assigment Operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && 'ANONIMUS';
// rest2.owner = rest2.owner && 'ANONIMUS';

// AND Assigment Operator
rest1.owner &&= 'ANONIMUS';
rest2.owner &&= 'ANONIMUS';

// console.info(rest1)
// console.info(rest2)

/////////////// 

// restaurant.numGuests = 0;

// Nulish Operator (??)
const guests = restaurant.numGuests ?? 10;
// console.info(guests);


// bisa menggunakan tipe data apa saja
//membalikan tipe data apa pun,di sebut Short-Cuircuiting (&& / ||)
// Tapi tidak di sarankan  karena sulit untuk membaca codenya di masa mendatang
// console.info('----OR-----');
// console.info(3 || 'Hello')
// console.info('' || 'Hello')
// console.info('' || undefined);

// console.info('' || undefined || null || 0 || 'Hello' || 3);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.info(guests1);
const guests2 = restaurant.numGuests || 10;
// console.info(guests2);

// console.info('----AND-----');
// console.info(0 && 23);
// console.info(9 && 23);

// console.info(9 && 23 && 'Hello' && null && 'Jonns');

// Contoh
if (restaurant.othersPizza) {
    restaurant.othersPizza('mushroms', 'spinach');
}

restaurant.othersPizza && restaurant.othersPizza('mushroms', 'spinach');



// Rekap ulang

// 1) Destructring

const arr2 = [1, 2, ...[1, 2, 3, 4]];
// console.info(arr2);

// Rest because on lifet side of 
const [d, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.info(d,b,others);

const [pizza, , ressto, ...othersFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.info(pizza,ressto,othersFood);

// object 
const { sat, ...weekDays } = restaurant.openingHours;
// console.info(sat,weekDays);

// 2) Function
function add(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    // console.info(sum);
}

add(1, 3, 4, 5)
add(1, 3, 4, 4, 56)

const t = [2, 3, 44];
add(...t);

restaurant.othersPizza('muhsromoss', 'onion', 'olives', 'spinach');
restaurant.othersPizza('muhsromoss');
/*///////////////////// */
// Spreed Operator 
const arr = [1, 2, 3, 4];
const newArr = [...arr, 5, 6, 7];
// console.info(newArr);

const newMenu = [...restaurant.mainMenu, 'Genachi'];
// console.info(newMenu);

// Copy Array 
const menuCopy = [...restaurant.mainMenu];
// console.info(menuCopy);

// Join 2 Array
const joinMenuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.info(joinMenuCopy);

// Menggunakan Spread pada Array Nested
const nestedArray = [[1, 2], [3, 4]];
const flatArray = [...nestedArray[0], ...nestedArray[1]];
// console.log(flatArray);  // Output: [1, 2, 3, 4]


// Itereblas : Array,String,Maps,Sets. Not Itereble
const str = 'Rayhan';
const letters = [...str, 'O', 'K'];
// console.info(letters);
// console.info(...str);

// real world Example
const bahan = ['musromass', 'aspargus', 'cheese'];
restaurant.orderpasta(...bahan);

// Objects
const newRestaurant = { ...restaurant, foundedIn: 1998 };
newRestaurant.name = 'Ristorate Roma';
// Spread operator tidak melakukan deep copy untuk objek atau array yang memiliki referensi nested
newRestaurant.openingHours.thu.open = 9;

// console.info(newRestaurant);
// console.info(restaurant);

/*///////////////////// */

// Destructring Object
const { categories, name, openingHours2 } = restaurant;
// console.info(categories, name, openingHours2)

// Meruabh nama variable baru
const { categories: tags, name: nameRestaurant, openingHours: hours } = restaurant;
// console.info(tags, nameRestaurant, hours);

// Default Values
const { menu = [], starterMenu: startess = [] } = restaurant;
// console.info(menu, startess);

// Trik => menukar nilai value
const obj = { f: 30, g: 20, h: 10 };
let f;
let g;
({ f, g } = obj);
// console.info(f, g)

// Nested Object 
const { sat: { open: o, close: c } } = openingHours;
// console.info(o, c);

// Membuat argument dalem bentuk object 
restaurant.orderDlivery({
    mainIndex: 1,
    starterIndex: 2,
    time: '20:30',
    addres: 'vila doel sole 21'
});
/*///////////////////// */

// Destructring Array
const a = [2, 3, 4];
const [x, y, z] = a;
// console.info(x, y, z);


let [frist, , second] = restaurant.categories;
// console.info(frist, second);

// Merubah nilai destructring
// const temp = frist;
// frist = second;
// second = temp;
// console.info(frist,second);

// Trik => menukar nilai value
[frist, second] = [second, frist];
// console.info(frist, second);

// Memindah 2 return values subah function
const [starter, mainCourse] = restaurant.order(2, 2);
// console.info(starter, mainCourse);

// Nested Destructring
const nested = [2, 3, [5, 6]];
// const [i,,j] = nested;
const [i, , [j, k]] = nested;
// console.info(i, j, k);

// Default Values 
const [p = 1, r = 1, s = 1] = [4, 5];
// console.info(p, r, s);

// Destructring Object

