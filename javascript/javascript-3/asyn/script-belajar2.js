// https://countries-api-836d.onrender.com/countries/

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

console.info(btn);

// const renderCountry = function (data, className = '') {
//     const html = `
//     <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies
//         [0].code}</p>
//           </div>
//     </article>
//     `

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;


// }

// const getCountryAndNighbor = function (country) {

//     // Ajax call 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();
//     request.addEventListener('load', function () {

//         const [data] = JSON.parse(this.responseText);
//         // Render Country 1
//         renderCountry(data)


//         // Get Nighbour Country 1
//         const [nighbour] = data.borders;

//         if (!nighbour) return;

//         // Ajax call 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v2/alpha/${nighbour}`);
//         request2.send();

//         request2.addEventListener('load', function () {
//             const data = JSON.parse(this.responseText);
//             renderCountry(data, 'neighbour');
//         })
//     })
// };


// getCountryAndNighbor('indonesia');
// getCountryAndNighbor('portugal');


// const renderError = function (msg) {
//     countriesContainer.insertAdjacentText('beforeend', `Data ${msg} 🥲🥲🥲🥲`);
//     countriesContainer.style.opacity = 1;
// }

// let cnt = 0;

// const getCountryData = function (country) {
//     cnt++;
//     if (cnt !== 2) {

//     };
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(response => {
//             if (!response.ok === true)
//                 throw new Error(`Country not found ${response.status}`)
//             if (cnt !== 2) {

//                 return response.json()
//             }else {
//                 throw new Error(`Karena click 2 kali ${response.status}`)
//             }
//         }
//         )
//         .then(data => {
//             renderCountry(data[0])

//             console.info(data)

//             const neighbour = data[0].borders[0];

//             if (!neighbour) return;


//             return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//         })
//         .then(response => {
//             console.info(response)

//             if (!response.ok === true) 
//                 throw new Error(`Country not found ${response.status}`)

//             return response.json()
//         }
//         )
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             console.info(`${err.message} 🥲🥲🥲`);

//             renderError(`${err.message}`)
//         })
//         .finally(() => countriesContainer.style.opacity = 1);

// }
// btn.addEventListener('click', function () {
//     // getCountryData('afafaf');
//     getCountryData('indonesia');
// })


// const renderError = function (msg) {
//     countriesContainer.insertAdjacentText('beforeend', `Data ${msg} 🥲🥲🥲🥲`);
//     countriesContainer.style.opacity = 1;
// }

// const getJson = function (url, msg = 'Ada yang tidak beres') {
//     return fetch(url)
//         .then(response => {
//             if (!response.ok)
//                 throw new Error(`${msg} ${response.status}`)
//             return response.json()

//         })
// }

// const getCountryData = function (country) {
//     getJson(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//         .then(data => {
//             renderCountry(data[0])

//             console.info(data);

//             const neighbour = data?.[0]?.borders?.[0];
//             // const neighbour ='fffff';

//             if (!neighbour) throw new Error(` country neighbour not found!`);

//             return getJson(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country neighbour not found')
//         })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             renderError(`${err.message}`)
//         })
//         .finally(() => countriesContainer.style.opacity = 1);

// }
// btn.addEventListener('click', function () {
//     // getCountryData('afafaf');
//     // getCountryData('indonesia');
//     getCountryData('australia');
// })

// setTimeout(() => {
//     console.info(5);
// }, 5000);

// setTimeout(() => {
//     console.info(1)
// }, 1000);

// console.info('test');
// setTimeout(() => {
//     console.info('Time')
// }, 0);
// Promise.resolve('Resolve promise 1').then(res => console.info(res))
// console.info('Test End');

// Promise.resolve('Resolve promise 3').then(res => {
//     for (let i = 0; i < 1000000000; i++) { }
//     console.info(res)
// }
// );


// 
//   console.info('Waiting...')
//     setTimeout(() => {
//         if (Math.random() >= 0.5) resolve('You WIN');
//         else reject(new Error('You lost to money'));
//     }, 2000);

// });

// lotryPromis
//     .then(res => console.info(res))
//     .catch(err => console.error(err))

// const wait = function (second) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, second * 1000)
//     })
// }
// Menggunakan Promise
// wait(2)
// .then(() => {
//     console.info('Waiting for 2 minute')
//     return wait(3)
// }).then(() => {
//     console.info('Waiting for 3 minute')
//     return wait(2)
// }).then(() => {
//     console.info('Waiting for 2 minute')
//     return wait(2)
// }).then(() => {
//     console.info('Waiting for 2 minute')
//     return wait(1)
// }).then(() => console.info('Waiting for 1 minute'))

// Menggunkana callback heal
// setTimeout(() => {
//     console.info(1000);
//     setTimeout(() => {
//         console.info(1000);
//         setTimeout(() => {
//             console.info(1000);
//             setTimeout(() => {
//                 console.info(1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// Promise.resolve('abc').then(res =>console.info(res));
// Promise.reject('Error').catch(err => console.error(err));


// const getlocetion = function () {
//     return new Promise(function (resolve, reject) {
//         // navigator.geolocation.getCurrentPosition(
//         //     position => console.info(position),
//         //     error => console.error(error)
//         // )
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// }

// const renderCountry = function (data, className = '') {
//     const html = `
//     <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies
//         [0].code}</p>
//           </div>
//     </article>
//     `

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;


// }

// const getCountry = function (country) {
//     console.info(country);
//     return fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(response => {
//             if (!response.ok) throw new Error(`Gagal ambil data lokasi: ${response.status}`);
//             return response.json();
//         })
//         .then(data => {
//             renderCountry(data[0])

//             const neighbour = data?.[0]?.borders?.[0];

//             if (!neighbour) throw new Error(` country neighbour not found!`)


//             return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//         })
//         .then(response => {

//             if (!response.ok) throw new Error(`Country not found ${response.status}`);
//             return response.json()
//         })
//         .then(data => {
//             renderCountry(data, 'neighbour')
//         })
//         .catch(err => console.info(`${err.message}`))
// }

// const whereAmI = function () {
//     console.info('ok')
//     getlocetion()
//         .then(pos => {
//             const { latitude: lat, longitude: lng } = pos.coords;

//             console.info(lat, lng)

//             return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
//         })
//         .then(response => {
//             console.info(response)
//             return response.json()
//         })
//         .then(data => {

//             if (!data) throw new Error(`Data not found`)
//             console.info(`Anda berada di ${data.city},${data.countryName}`)

//             btn.addEventListener('click', function () {
//                 getCountry(`${data.countryName}`)
//                 console.info('ok')
//             })

//         })
//         .catch(err => console.info(err.message));
// }

// whereAmI()

// const whereAmI = async function (country) {
//     const pos = await getPosition()
//     console.info(pos);


//     // await fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.info(res));
//     const res = await fetch(`https://restcountries.com/v2/name/${country}`)

//     const data = await res.json()

//     console.info(data)


// }

// whereAmI('portugal');
// console.info('Frist');

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json()
    })
};

// const get3Countries = async function (c1, c2, c3) {
//     try {
//         const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`)
//         const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`)
//         const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`)
//         console.info(data1.capital, data2.capital, data3.capital);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));

//     } catch (err) {
//         console.info(err.message)
//     }

// }
// get3Countries('indonesia', 'russia', 'japan');

// const getCobaCountries = async function (c1, c2, c3) {
//     try {
//         const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`)
//         const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`)
//         const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`)
//         console.info(data1.capital, data2.capital, data3.capital)


//         const data = await Promise.all([
//             getJSON(`https://restcountries.com/v2/name/${c1}`),
//             getJSON(`https://restcountries.com/v2/name/${c2}`),
//             getJSON(`https://restcountries.com/v2/name/${c3}`)]
//         )
//         console.info(data)
//         console.info(data.map( d => d[0].capital))
//     }
//     catch (err) {
//     console.info(err.message)
// }
// }


// getCobaCountries('indonesia', 'brazil', 'spain')


// Promise race
(async function () {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/Germany`),
        getJSON(`https://restcountries.com/v2/name/italy`),
        getJSON(`https://restcountries.com/v2/name/argentina`),

    ])
    console.info(res[0])
})();

const timeOut = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(() => {
            reject(new Error('response terlalu lama'))
        }, sec);
    })
}
Promise.race([
        getJSON(`https://restcountries.com/v2/name/italy`),
        timeOut(1000)
])
.then(res => console.info(res[0]))
.catch(err => console.info(err))

//Promise allStited

Promise.allSettled([
    Promise.reject('Error'),
    Promise.resolve('Succes'),
    Promise.resolve('Another succer')
])

.then(res => console.info(res))
.catch(e => console.error(e))

//Promise all
Promise.all([
    Promise.reject('Error'),
    Promise.resolve('Succes'),
    Promise.resolve('Another succer')
])
.then(res => console.info(res))
.catch(e => console.error(e))

// Promise any
Promise.any([
    Promise.reject('Error'),
    Promise.resolve('Succes'),
    Promise.resolve('Another succer')
])
.then(res => console.info(res))
.catch(e => console.error(e))

