'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className} ">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.
      population / 1000).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies
    [0].name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('afterbegin', html);
  countriesContainer.style.opacity = 1;
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

/*

const getCountryAndNeighbourntry = function (country) {

  // Ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {

    const [data] = JSON.parse(this.responseText);
    console.info(data);
    // Render country 1
    renderCountry(data)

    // Get nighbourntyr country
    const [nighbour] = data.borders;

    if (!nighbour) return;

    // Ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${nighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.info(data2);


      renderCountry(data2, 'neighbour');
    })
  })
}
getCountryAndNeighbourntry('indonesia')
// getCountryAndNeighbourntry('usa')


// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
*/

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();


// const getJSON = function (url, errorMsg = 'something wrong') {
//   return fetch(url)
//     .then(
//       response => {
//         if (!response.ok) throw new Error(`${errorMsg}, ${response.status}`)
//         return response.json()
//       }
//     )
// }



// const getCountry = function (country) {

//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(
//       response => {
//         if (!response.ok) throw new Error(`Country not found ${response.status}`)
//         return response.json()
//       }
//     )
//     .then(data => {
//       renderCountry(data[0])
//       const nighbour = data[0].borders[0];

//       if (!nighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${nighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`)
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })


// }


// const getCountry = function (country) {

//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country Not Found')
//     .then(data => {
//       renderCountry(data[0])
//       const nighbour = data[0].borders[0];

//       if (!nighbour) throw new Error('No neighbour found!');;

//       // Country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${nighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`)
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })
// }


// btn.addEventListener('click', function () {
//   getCountry('usa');
// });

// getCountry('kkkkk');

